import React from 'react';
import fs from 'fs';
import path from 'path';
import { episodes } from './episodes';
import ReactDOMServer from 'react-dom/server';
import { EpisodesPage } from './Page/EpisodesPage';
import { Episode } from './Type/Episode';
import { EpisodeDetail } from './View/EpisodeDetail';

function buildEpisodesPage(episodes: Episode[]) {
  const html = ReactDOMServer.renderToStaticMarkup(<EpisodesPage episodes={episodes}/>);

  const indexPath = path.resolve(__dirname, `../docs/index.html`);
  fs.writeFileSync(indexPath, `<!DOCTYPE html>\n${html}`);
  console.log(indexPath);
}

function buildEpisodeDetailPages(episodes: Episode[]) {
  for (const episode of episodes) {
    const html = ReactDOMServer.renderToStaticMarkup(<EpisodeDetail episode={episode}/>);

    const dirPath = path.resolve(__dirname, `../docs/${episode.number}`);
    fs.rmdirSync(dirPath, { recursive: true });
    fs.mkdirSync(dirPath);
    fs.writeFileSync(`${dirPath}/index.html`, `<!DOCTYPE html>\n${html}`);
    console.log(dirPath);
  }
}

buildEpisodesPage(episodes);
buildEpisodeDetailPages(episodes);
