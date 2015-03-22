'use strict';
var IceCap = require('ice-cap');
var fs = require('fs-extra');
var util = require('./util.js');

function buildIndex(forceUpdate){
  var episodes = util.getEpisodes();
  var latestUnixTime = util.getLatestUnixTime(episodes);
  var outPath = './www/index.html';
  var layoutPath = './www/template/layout.html';
  var templatePath = './www/template/index.html';

  if (!forceUpdate) {
    if (!util.isNeedUpdate(outPath, [latestUnixTime, templatePath, layoutPath])) {
      return;
    }
  }

  var template = fs.readFileSync(templatePath, {encode: 'utf8'}).toString();
  var ice = new IceCap(template);

  ice.loop('episode', episodes, function(i, episode, ice){
    ice.attr('link', 'href', episode.ep);
    ice.text('number', episode.ep);
    ice.text('title', episode.title);
    ice.load('text', util.replaceTwitter(episode.text));
    ice.text('date', episode.date);
  });

  var layout = fs.readFileSync(layoutPath, {encode: 'utf8'}).toString();
  var layoutIce = new IceCap(layout);
  layoutIce.load('content', ice);

  fs.writeFileSync(outPath, layoutIce.html, {encode: 'utf8'});
  console.log('index.html');
}

module.exports = buildIndex;
