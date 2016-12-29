'use strict';
const IceCap = require('ice-cap').default;
const fs = require('fs-extra');
const util = require('./util.js');

function buildIndex(forceUpdate){
  const episodes = util.getEpisodes();
  const latestUnixTime = util.getLatestUnixTime(episodes);
  const outPath = './docs/index.html';
  const layoutPath = './src/template/layout.html';
  const templatePath = './src/template/index.html';

  if (!forceUpdate) {
    if (!util.isNeedUpdate(outPath, [latestUnixTime, templatePath, layoutPath])) {
      return;
    }
  }

  const template = fs.readFileSync(templatePath, {encode: 'utf8'}).toString();
  const ice = new IceCap(template);

  ice.loop('episode', episodes, function(i, episode, ice){
    ice.attr('link', 'href', episode.ep);
    ice.text('number', episode.ep);
    ice.text('title', episode.title);
    ice.load('text', util.replaceTwitter(episode.text));
    ice.text('date', episode.date);
  });

  const layout = fs.readFileSync(layoutPath, {encode: 'utf8'}).toString();
  const layoutIce = new IceCap(layout);
  layoutIce.load('content', ice);

  fs.writeFileSync(outPath, layoutIce.html, {encode: 'utf8'});
  console.log('index.html');
}

module.exports = buildIndex;
