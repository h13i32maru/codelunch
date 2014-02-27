#!/usr/bin/env node

// ---- type annotation ----
/**
 * @typedef {{
 *   vol: number,
 *   track: string,
 *   date: string,
 *   title: string,
 *   text: string,
 *   words: {word: string, url: string}[]
 * }} Volume
 */
// ---- end ----

var Util = {
  getVolumes: function(volumesDirPath) {
    var fs = require('fs');
    var volumeFilePaths = fs.readdirSync(volumesDirPath).reverse();
    var volumes = [];
    for (var i = 0; i < volumeFilePaths.length; i++) {
      var volumeJSON = fs.readFileSync(volumesDirPath + '/' + volumeFilePaths[i]);
      var volume = JSON.parse(volumeJSON);
      volumes.push(volume);
    }

    return volumes;
  },

  replaceTwitter: function(text) {
    return text.replace(/@([0-9a-zA-Z_]+)/g, '<a href="https://twitter.com/$1" target="_blank">@$1</a>');
  }
};

var IndexBuilder = {
  build: function(templateHTMLFilePath, volumesDirPath, callback) {
    var fs = require('fs');
    var templateHTML = fs.readFileSync(templateHTMLFilePath, 'utf-8');
    var volumes = Util.getVolumes(volumesDirPath);

    var jsdom = require('jsdom');
    jsdom.env(templateHTML, [], function(errors, window){
      if (errors) {
        console.error(errors);
        return;
      }

      var html = this._inject(volumes, window);
      callback(html);
    }.bind(this));
  },

  /**
   *
   * @param {Volume[]} volumes
   * @param window
   * @private
   */
  _inject: function(volumes, window) {
    var docBody = window.document.querySelector('#cl-doc-body');
    var rowTemplate = docBody.children[0].cloneNode(true);
    docBody.innerHTML = '';

    for (var i = 0; i < volumes.length; i++) {
      var volume = volumes[i];
      var row = rowTemplate.cloneNode(true);
      row.querySelector('#cl-link').href = volume.vol;
      row.querySelector('#cl-title').textContent = volume.title;
      row.querySelector('#cl-vol-number').textContent = volume.vol;
      row.querySelector('#cl-date').textContent = volume.date;
      row.querySelector('#cl-text').innerHTML = volume.text;

      row.innerHTML += '\n';
      docBody.appendChild(row);
    }

    return window.document.innerHTML;
  }
};

var VolumeBuilder = {
  _fs: require('fs'),
  _jsdom: require('jsdom'),

  _volumes: null,
  _templateHTML: null,
  _callback: null,

  build: function(templateHTMLFilePath, volumesDirPath, callback) {
    this._volumes = Util.getVolumes(volumesDirPath);
    this._templateHTML = this._fs.readFileSync(templateHTMLFilePath, 'utf-8');
    this._callback = callback;

    this._buildEachVolume();
  },

  _buildEachVolume: function() {
    if (this._volumes.length === 0) {
      return;
    }

    var volume = this._volumes.shift();

    this._jsdom.env(this._templateHTML, [], function(errors, window){
      if (errors) {
        console.errors(errors);
        return;
      }

      var html = this._injectVolumeToHTML(volume, window);

      this._callback(volume, html);

      this._buildEachVolume();

    }.bind(this));
  },

  /**
   *
   * @param {Volume} volume
   * @param window
   * @returns {string}
   * @private
   */
  _injectVolumeToHTML: function(volume, window) {
    var vol = window.document.querySelector('#cl-vol-number');
    vol.textContent = volume.vol;

    var iframe = window.document.querySelector('#cl-sound-cloud iframe');
    iframe.src = iframe.src.replace(/[/]tracks[/][0-9]+/, '/tracks/' + volume.track);

    var date = window.document.querySelector('#cl-date');
    date.textContent = volume.date;

    var title = window.document.querySelector('#cl-title');
    title.textContent = volume.title;

    var text = window.document.querySelector('#cl-text');
    // @hogeな文字列をtwitterへのリンクに置換する.
    text.innerHTML = Util.replaceTwitter(volume.text);

    var words = window.document.querySelector('#cl-related-words');
    var rowTemplate = words.children[0].cloneNode(true);
    words.innerHTML = '';

    for (var i = 0; i < volume.words.length; i++) {
      var row = rowTemplate.cloneNode(true);
      var a = row.querySelector('a');

      if (volume.words[i].url) {
        a.href = volume.words[i].url || "";
      } else {
        a.removeAttribute('href');
      }

      a.textContent = volume.words[i].word;
      words.innerHTML += '\n';
      words.appendChild(row);
    }

    var html = window.document.innerHTML;
    window.close();

    return html;
  }
};

var RSSBuilder = {
  SITE_URL: 'http://codelunch.fm',
  FEED_URL: 'http://codelunch.fm/rss.xml',
  AUTHOR: 'h13i32maru',

  build: function(volumesDirPath) {
    var RSS = require('rss');
    var feed = new RSS({
      title: 'Code Lunch',
      feed_url: this.FEED_URL,
      site_url: this.SITE_URL,
      author: this.AUTHOR
    });

    var volumes = Util.getVolumes(volumesDirPath);
    for (var i = 0; i < volumes.length; i++) {
      var volume = volumes[i];
      var url = this.SITE_URL + '/' + volume.vol;
      feed.item({
        title: volume.title,
        description: volume.text,
        url: url,
        guid: url,
        date: volume.date
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
    volumeTemplatePath = argv[i++];
    volumesDirPath = argv[i++];
    break;
  }
}

var selfDirPath = path.dirname(process.argv[1]);
var rootDirPath = selfDirPath + '/../';
var volumesDirPath = rootDirPath + '/volumes';
var indexTemplatePath = rootDirPath + '/template/index.html';
var volumeTemplatePath = rootDirPath + '/template/volume.html';

// rss
if (buildRSS) {
  var rss = RSSBuilder.build(volumesDirPath);
  var outputFilePath = rootDirPath + '/rss.xml';
  fs.writeFileSync(outputFilePath, rss);
  console.log('done: rss');
}

// index.html
IndexBuilder.build(indexTemplatePath, volumesDirPath, function(html){
  var outputFilePath = rootDirPath + '/index.html';
  fs.writeFileSync(outputFilePath, html);

  console.log('done: index');
});

// volume/index.html
VolumeBuilder.build(volumeTemplatePath, volumesDirPath, function(volume, html){
  var outputDirPath = rootDirPath + '/' + volume.vol;
  var outputFilePath = outputDirPath + '/index.html';

  if (!fs.existsSync(outputDirPath)) {
    fs.mkdirSync(outputDirPath);
  }

  fs.writeFileSync(outputFilePath, html);

  console.log('done: ' + volume.vol);
});

