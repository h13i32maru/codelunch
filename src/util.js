'use strict';
var fs = require('fs-extra');
var path = require('path');

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

exports.getEpisodes = getEpisodes;
exports.getLatestUnixTime = getLatestUnixTime;
exports.replaceTwitter = replaceTwitter;
exports.isNeedUpdate = isNeedUpdate;
