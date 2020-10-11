import fs from 'fs';
import path from 'path';
import {episodes} from './episodes';
import {EpisodeRender} from './EpisodeRender';

const episodeRender = new EpisodeRender();

// build index.html
{
  // load template
  const templateIndexPath = path.resolve(__dirname, `./template/index.html`);
  const templateIndexHTML = fs.readFileSync(templateIndexPath).toString();

  const indexHTML = templateIndexHTML
    .replace(/__HTML__/, episodeRender.renderEpisodes(episodes));

  const indexPath = path.resolve(__dirname, `../docs/index.html`);
  fs.writeFileSync(indexPath, indexHTML);
  console.log(indexPath)
}

// build ${number}/index.html
{
  // load template
  const templateIndexPath = path.resolve(__dirname, `./template/episode-index.html`);
  const templateIndexHTML = fs.readFileSync(templateIndexPath).toString();

  // make episode file
  for (const episode of episodes) {
    const indexHTML = templateIndexHTML
      .replace(/__TITLE__/g, `${episode.number}. ${episode.title} | CodeLunch.fm`)
      .replace(/__DESC__/g, episode.desc)
      .replace(/__URL__/g, `https://codelunch.fm/${episode.number}`)
      .replace(/__NUMBER__/g, `${episode.number}`)
      .replace(/__HTML__/g, episodeRender.renderEpisode(episode))

    const dirPath = path.resolve(__dirname, `../docs/${episode.number}`);
    fs.rmdirSync(dirPath, {recursive: true});
    fs.mkdirSync(dirPath);
    fs.writeFileSync(`${dirPath}/index.html`, indexHTML);
    console.log(dirPath)
  }
}

