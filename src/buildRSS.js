var RSS = require('rss');
var fs = require('fs-extra');
var util = require('./util.js');

function buildRSS(forceUpdate) {
  var episodes = util.getEpisodes();
  var latestUnixTime = util.getLatestUnixTime(episodes);
  var outPath = './www/rss.xml';
  var templatePath = './www/template/rss.json';

  if (!forceUpdate) {
    if (!util.isNeedUpdate(outPath, [templatePath, latestUnixTime])) {
      return;
    }
  }

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

module.exports = buildRSS;
