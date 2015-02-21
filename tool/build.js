#!/usr/bin/env node

// ---- type annotation ----
/**
 * @typedef {{
 *   ep: number,
 *   track: string,
 *   date: string,
 *   title: string,
 *   text: string,
 *   words: {word: string, url: string}[]
 * }} Episode
 */
// ---- end ----

var Util = {
  getEpisodes: function(episodesDirPath) {
    var fs = require('fs');
    var episodeFilePaths = fs.readdirSync(episodesDirPath).reverse();
    var episodes = [];
    for (var i = 0; i < episodeFilePaths.length; i++) {
      var episodeJSON = fs.readFileSync(episodesDirPath + '/' + episodeFilePaths[i]);
      var episode = JSON.parse(episodeJSON);
      episodes.push(episode);
    }

    return episodes;
  },

  replaceTwitter: function(text) {
    return text.replace(/@([0-9a-zA-Z_]+)/g, '<a class="cl-twitter" href="https://twitter.com/$1" target="_blank">@$1</a>');
  }
};

var IndexBuilder = {
  build: function(templateHTMLFilePath, episodesDirPath, callback) {
    var fs = require('fs');
    var templateHTML = fs.readFileSync(templateHTMLFilePath, 'utf-8');
    var episodes = Util.getEpisodes(episodesDirPath);

    var jsdom = require('jsdom');
    jsdom.env(templateHTML, [], function(errors, window){
      if (errors) {
        console.error(errors);
        return;
      }

      var html = this._inject(episodes, window);
      callback(html);
    }.bind(this));
  },

  /**
   *
   * @param {Episode[]} episodes
   * @param window
   * @private
   */
  _inject: function(episodes, window) {
    var docBody = window.document.querySelector('#cl-doc-body');
    var rowTemplate = docBody.children[0].cloneNode(true);
    docBody.innerHTML = '';

    for (var i = 0; i < episodes.length; i++) {
      var episode = episodes[i];
      var row = rowTemplate.cloneNode(true);
      row.querySelector('#cl-link').href = episode.ep;
      row.querySelector('#cl-title').textContent = episode.title;
      row.querySelector('#cl-vol-number').textContent = episode.ep;
      row.querySelector('#cl-date').textContent = episode.date;
      row.querySelector('#cl-text').innerHTML = Util.replaceTwitter(episode.text);

      row.innerHTML += '\n';
      docBody.appendChild(row);
    }

    return "<!DOCTYPE html>\n" + window.document.documentElement.outerHTML;
  }
};

var EpisodeBuilder = {
  _fs: require('fs'),
  _jsdom: require('jsdom'),

  _episodes: null,
  _templateHTML: null,
  _callback: null,

  build: function(templateHTMLFilePath, episodesDirPath, callback) {
    this._episodes = Util.getEpisodes(episodesDirPath);
    this._templateHTML = this._fs.readFileSync(templateHTMLFilePath, 'utf-8');
    this._callback = callback;

    this._buildEachEpisode();
  },

  _buildEachEpisode: function() {
    if (this._episodes.length === 0) {
      return;
    }

    var episode = this._episodes.shift();

    this._jsdom.env(this._templateHTML, [], function(errors, window){
      if (errors) {
        console.errors(errors);
        return;
      }

      var html = this._injectEpisodeToHTML(episode, window);

      this._callback(episode, html);

      this._buildEachEpisode();

    }.bind(this));
  },

  /**
   *
   * @param {Episode} episode
   * @param window
   * @returns {string}
   * @private
   */
  _injectEpisodeToHTML: function(episode, window) {
    var vol = window.document.querySelector('#cl-vol-number');
    vol.textContent = episode.ep;

//    jsdom can not use audio tag.
//    var audio = window.document.querySelector('#cl-audio audio');
//    audio.src = 'episode' + episode.ep + '.mp3';

    var download = window.document.querySelector('#cl-audio .cl-download a');
    download.href = 'episode' + episode.ep + '.mp3';

    var time = window.document.querySelector('#cl-audio .cl-time');
    time.textContent = episode.time;

    var date = window.document.querySelector('#cl-date');
    date.textContent = episode.date;

    var title = window.document.querySelector('#cl-title');
    window.document.title = window.document.title.replace('{EpisodeTitle}', episode.title);
    title.textContent = episode.title;

    var text = window.document.querySelector('#cl-text');
    // @hogeな文字列をtwitterへのリンクに置換する.
    text.innerHTML = Util.replaceTwitter(episode.text);

    var notice = window.document.querySelector('#cl-notice');
    notice.innerHTML = episode.notice || "";

    var words = window.document.querySelector('#cl-show-notes');
    var rowTemplate = words.children[0].cloneNode(true);
    words.innerHTML = '';

    for (var i = 0; i < episode.words.length; i++) {
      var row = rowTemplate.cloneNode(true);
      var a = row.querySelector('a');

      if (episode.words[i].url) {
        a.href = episode.words[i].url || "";
      } else {
        a.removeAttribute('href');
      }

      a.textContent = episode.words[i].word;
      words.innerHTML += '\n';
      words.appendChild(row);
    }

    var html = "<!DOCTYPE html>\n" + window.document.documentElement.outerHTML;
    window.close();

    html = html.replace('episode999.mp3', 'episode' + episode.ep + '.mp3');

    return html;
  }
};

var RSSBuilder = {
  SITE_URL: 'http://codelunch.fm',

  build: function(episodesDirPath) {
    var RSS = require('rss');
    var feed = new RSS({
      title: 'CodeLunch.fm',
      feed_url: 'http://codelunch.fm/rss.xml',
      site_url: this.SITE_URL,
      description: 'エンジニアがランチの時に話すような技術ネタを紹介するポッドキャストです。',
      author: 'Ryo Maruyama',
      language: 'ja',
      copyright: '2013 Ryo Maruyama',
      custom_namespaces: {
        'itunes': 'http://www.itunes.com/dtds/podcast-1.0.dtd'
      },
      custom_elements: [
        {'itunes:author': 'Ryo Maruyama'},
        {'itunes:subtitle': 'Podcast by @h13i32maru & @iizukak'},
        {'itunes:summary': 'エンジニアがランチの時に話すような技術ネタを紹介するポッドキャストです。'},
        {'itunes:keywords': 'web,programing,javascript,php,go,lua,android'},
        {'itunes:owner': [
          {'itunes:name': 'h13i32maru'},
          {'itunes:email': 'h13i32maru@gmail.com'}
        ]},
        {'itunes:image': {
          _attr: {
            href: 'http://codelunch.fm/image/artwork_1400.jpg'
          }
        }},
        {'itunes:category': [
          {_attr: {
            text: 'Technology'
          }},
          {'itunes:category': {
            _attr: {
              text: 'Podcasting'
            }
          }}
        ]}
      ]
    });

    var episodes = Util.getEpisodes(episodesDirPath);
    for (var i = 0; i < episodes.length; i++) {
      var episode = episodes[i];
      var url = this.SITE_URL + '/' + episode.ep;
      var download = this.SITE_URL + '/' + episode.ep + '/episode' + episode.ep + '.mp3';
      feed.item({
        title: episode.ep + '. ' + episode.title,
        description: episode.text,
        url: url,
        guid: url,
        date: episode.date,
        enclosure: {url: download},
        custom_elements: [
          {'itunes:duration': episode.time}
        ]
      });
    }

    return feed.xml('  ');
  }
};

// ---- main ----

var path = require('path');
var fs = require('fs');

// parse command line arguments
var argv = process.argv;
var buildRSS = true;
for (var i = 2; i < argv.length; i++) {
  switch (argv[i]) {
  case '--help':
    // fall through
  case '-h':
    var name = path.basename(process.argv[1]);
    console.log('usage: ' + name + ' [--no-rss]');
    process.exit(0);
    break;
  case '--no-rss':
    buildRSS = false;
    break;
  default:
    indexTemplatePath = argv[i++];
    episodeTemplatePath = argv[i++];
    episodesDirPath = argv[i++];
    break;
  }
}

var selfDirPath = path.dirname(process.argv[1]);
var rootDirPath = selfDirPath + '/../';
var episodesDirPath = rootDirPath + '/episodes';
var indexTemplatePath = rootDirPath + '/template/index.html';
var episodeTemplatePath = rootDirPath + '/template/episode.html';

// rss
if (buildRSS) {
  var rss = RSSBuilder.build(episodesDirPath);
  var outputFilePath = rootDirPath + '/www/rss.xml';
  fs.writeFileSync(outputFilePath, rss);
  console.log('done: rss');
}

// index.html
IndexBuilder.build(indexTemplatePath, episodesDirPath, function(html){
  var outputFilePath = rootDirPath + '/www/index.html';
  fs.writeFileSync(outputFilePath, html);

  console.log('done: index');
});

// episode/index.html
EpisodeBuilder.build(episodeTemplatePath, episodesDirPath, function(episode, html){
  var outputDirPath = rootDirPath + '/www/' + episode.ep;
  var outputFilePath = outputDirPath + '/index.html';

  if (!fs.existsSync(outputDirPath)) {
    fs.mkdirSync(outputDirPath);
  }

  fs.writeFileSync(outputFilePath, html);

  console.log('done: ' + episode.ep);
});

