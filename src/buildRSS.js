const RSS = require('rss');
const fs = require('fs-extra');
const util = require('./util.js');

function buildRSS(forceUpdate) {
  const episodes = util.getEpisodes();
  const latestUnixTime = util.getLatestUnixTime(episodes);
  const outPath = './docs/rss.xml';
  const templatePath = './src/template/rss.json';

  if (!forceUpdate) {
    if (!util.isNeedUpdate(outPath, [templatePath, latestUnixTime])) {
      return;
    }
  }

  const rssJSON = fs.readFileSync('./src/template/rss.json', {encode: 'utf8'});
  const rss = JSON.parse(rssJSON);
  const feed = new RSS(rss);

  for (let i = 0; i < episodes.length; i++) {
    const episode = episodes[i];
    const url = rss.site_url + '/' + episode.ep;
    const download = rss.site_url + '/' + episode.ep + '/episode' + episode.ep + '.mp3';
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
