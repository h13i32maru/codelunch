const fs = require('fs');
const path = require('path');

// load episodes
require('../js/episodes');

// load template
const templateIndexPath = path.resolve(__dirname, `../template/index.html`);
const templateIndexHTML = fs.readFileSync(templateIndexPath).toString();

// make episode file
for (const episode of global.episodes) {
  const indexHTML = templateIndexHTML
    .replace(/__TITLE__/g, `${episode.number}. ${episode.title} | CodeLunch.fm`)
    .replace(/__DESC__/g, episode.desc)
    .replace(/__URL__/g, `https://codelunch.fm/${episode.number}`);

  const dirPath = path.resolve(__dirname, `../${episode.number}`);
  fs.rmdirSync(dirPath, {recursive: true});
  fs.mkdirSync(dirPath);
  fs.writeFileSync(`${dirPath}/index.html`, indexHTML);
  console.log(dirPath)
}
