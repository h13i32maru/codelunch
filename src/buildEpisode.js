'use strict';
const IceCap = require('ice-cap').default;
const fs = require('fs-extra');
const util = require('./util.js');

function buildEpisode(forceUpdate){
  const episodes = util.getEpisodes();

  const templatePath = './src/template/episode.html';
  const template = fs.readFileSync(templatePath, {encode: 'utf8'}).toString();

  const layoutPath = './src/template/layout.html';
  const layout = fs.readFileSync(layoutPath, {encode: 'utf8'}).toString();

  for (let i = 0; i < episodes.length; i++) {
    const episode = episodes[i];
    const filePath = './docs/' + episode.ep + '/index.html';

    if (!forceUpdate) {
      if (!util.isNeedUpdate(filePath, [episode.unixTime, templatePath, layoutPath])) {
        continue;
      }
    }

    const ice = new IceCap(template);
    const mp3 = 'episode' + episode.ep + '.mp3';
    ice.text('number', episode.ep);
    ice.text('title', episode.title);
    ice.load('text', util.replaceTwitter(episode.text));
    ice.text('date', episode.date);
    ice.text('time', episode.time);
    ice.text('notice', episode.notice);
    ice.attr('audio', 'src', mp3);
    ice.attr('download', 'href', mp3);
    ice.loop('showNote', episode.words, function(i, word, ice){
      ice.attr('showNoteLink', 'href', word.url);
      ice.text('showNoteLink', word.word);
    });

    const layoutIce = new IceCap(layout);
    layoutIce.load('content', ice);
    layoutIce.text('documentTitle', episode.title + ' | CodeLunch.fm', IceCap.MODE_WRITE);

    fs.writeFileSync(filePath, layoutIce.html, {encode: 'utf8'});
    console.log(episode.ep);
  }
}

module.exports = buildEpisode;
