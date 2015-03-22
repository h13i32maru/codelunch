var IceCap = require('ice-cap');
var fs = require('fs-extra');
var path = require('path');
var RSS = require('rss');

function main(){
  buildIndex();
  buildEpisode();
  buildRSS();
}

function getEpisodes() {
  if (getEpisodes.cache) return getEpisodes.cache;

  var episodesDirPath = './episodes';
  var episodeFilePaths = fs.readdirSync(episodesDirPath).reverse();
  var episodes = [];
  for (var i = 0; i < episodeFilePaths.length; i++) {
    var filePath = episodesDirPath + path.sep + episodeFilePaths[i];
    var episodeJSON = fs.readFileSync(filePath, {encode: 'utf8'});
    var episode = JSON.parse(episodeJSON);
    var stat = fs.statSync(filePath);
    episode.unixTime = stat.mtime.getTime();
    episodes.push(episode);
  }

  getEpisodes.cache = episodes;

  return episodes;
}

function getLatestUnixTime(episodes) {
  var latestUnixTime = -1;
  for (var i = 0; i < episodes.length; i++) {
    var episode = episodes[i];
    latestUnixTime = Math.max(latestUnixTime, episode.unixTime);
  }

  return latestUnixTime;
}

function replaceTwitter(text) {
  return text.replace(/@([0-9a-zA-Z_]+)/g, '<a class="cl-twitter" href="https://twitter.com/$1" target="_blank">@$1</a>');
}

function buildIndex(forceUpdate){
  var episodes = getEpisodes();
  var latestUnixTime = getLatestUnixTime(episodes);
  var outPath = './www/index.html';
  var layoutPath = './www/template/layout.html';
  var templatePath = './www/template/index.html';

  if (!forceUpdate) {
    if (!isNeedUpdate(outPath, [latestUnixTime, templatePath, layoutPath])) {
      return;
    }
  }

  var template = fs.readFileSync(templatePath, {encode: 'utf8'}).toString();
  var ice = new IceCap(template);

  ice.loop('episode', episodes, function(i, episode, ice){
    ice.attr('link', 'href', episode.ep);
    ice.text('number', episode.ep);
    ice.text('title', episode.title);
    ice.load('text', replaceTwitter(episode.text));
    ice.text('date', episode.date);
  });

  var layout = fs.readFileSync(layoutPath, {encode: 'utf8'}).toString();
  var layoutIce = new IceCap(layout);
  layoutIce.load('content', ice);

  fs.writeFileSync(outPath, layoutIce.html, {encode: 'utf8'});
  console.log('index.html');
}

function buildEpisode(forceUpdate){
  var episodes = getEpisodes();

  var templatePath = './www/template/episode.html';
  var template = fs.readFileSync(templatePath, {encode: 'utf8'}).toString();

  var layoutPath = './www/template/layout.html';
  var layout = fs.readFileSync(layoutPath, {encode: 'utf8'}).toString();

  for (var i = 0; i < episodes.length; i++) {
    var episode = episodes[i];
    var filePath = './www/' + episode.ep + '/index.html';

    if (!forceUpdate) {
      if (!isNeedUpdate(filePath, [episode.unixTime, templatePath, layoutPath])) {
        continue;
      }
    }

    var ice = new IceCap(template);
    var mp3 = 'episode' + episode.ep + '.mp3';
    ice.text('number', episode.ep);
    ice.text('title', episode.title);
    ice.load('text', replaceTwitter(episode.text));
    ice.text('date', episode.date);
    ice.text('notice', episode.notice);
    ice.attr('audio', 'src', mp3);
    ice.attr('download', 'href', mp3);
    ice.loop('showNote', episode.words, function(i, word, ice){
      ice.attr('showNoteLink', 'href', word.url);
      ice.text('showNoteLink', word.word);
    });

    var layoutIce = new IceCap(layout);
    layoutIce.load('content', ice);

    fs.writeFileSync(filePath, layoutIce.html, {encode: 'utf8'});
    console.log(episode.ep);
  }
}

function isNeedUpdate(outFilePath, materials) {
  try {
    var outFileStat = fs.statSync(outFilePath);
    var outFileUnixTime = outFileStat.mtime.getTime();
  } catch (e) {
    return true;
  }

  for (var i = 0; i < materials.length; i++) {
    var material = materials[i];
    switch (typeof material) {
      case 'string':
        var materialStat = fs.statSync(material);
        var materialUnixTime = materialStat.mtime.getTime();
        break;
      case 'number':
        var materialUnixTime = material;
        break;
      default:
        throw new Error('unknown material type. type = ' + typeof material);
    }

    if (outFileUnixTime < materialUnixTime) return true;
  }

  return false;
}

function buildRSS() {
  var episodes = getEpisodes();
  var latestUnixTime = getLatestUnixTime(episodes);
  var outPath = './www/rss.xml';
  var templatePath = './www/template/rss.json';

  if (!isNeedUpdate(outPath, [templatePath, latestUnixTime])) return;

  var rssJSON = fs.readFileSync('./www/template/rss.json', {encode: 'utf8'});
  var rss = JSON.parse(rssJSON);
  var feed = new RSS(rss);

  for (var i = 0; i < episodes.length; i++) {
    var episode = episodes[i];
    var url = rss.site_url + '/' + episode.ep;
    var download = rss.site_url + '/' + episode.ep + '/episode' + episode.ep + '.mp3';
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

  fs.writeFileSync(outPath, feed.xml('  '), {encode: 'utf8'});
  console.log('rss.xml');
}

main();
