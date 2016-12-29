'use strict';
const fs = require('fs-extra');
const path = require('path');

function getEpisodes() {
  if (getEpisodes.cache) return getEpisodes.cache;

  const episodesDirPath = './episodes';
  const episodeFilePaths = fs.readdirSync(episodesDirPath).reverse();
  const episodes = [];
  for (let i = 0; i < episodeFilePaths.length; i++) {
    const filePath = episodesDirPath + path.sep + episodeFilePaths[i];
    const episodeJSON = fs.readFileSync(filePath, {encode: 'utf8'});
    const episode = JSON.parse(episodeJSON);
    const stat = fs.statSync(filePath);
    episode.unixTime = stat.mtime.getTime();
    episodes.push(episode);
  }

  getEpisodes.cache = episodes;

  return episodes;
}

function getLatestUnixTime(episodes) {
  let latestUnixTime = -1;
  for (let i = 0; i < episodes.length; i++) {
    const episode = episodes[i];
    latestUnixTime = Math.max(latestUnixTime, episode.unixTime);
  }

  return latestUnixTime;
}

function replaceTwitter(text) {
  return text.replace(/@([0-9a-zA-Z_]+)/g, '<a class="cl-twitter" href="https://twitter.com/$1" target="_blank">@$1</a>');
}

function isNeedUpdate(outFilePath, materials) {
  let outFileStat;
  let outFileUnixTime;
  try {
    outFileStat = fs.statSync(outFilePath);
    outFileUnixTime = outFileStat.mtime.getTime();
  } catch (e) {
    return true;
  }

  for (let i = 0; i < materials.length; i++) {
    const material = materials[i];
    let materialStat;
    let materialUnixTime;
    switch (typeof material) {
      case 'string':
        materialStat = fs.statSync(material);
        materialUnixTime = materialStat.mtime.getTime();
        break;
      case 'number':
        materialUnixTime = material;
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
