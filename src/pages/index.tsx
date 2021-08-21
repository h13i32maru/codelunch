import React from 'react';
import { EpisodeRow } from '../view/EpisodeRow';
import { episodes } from '../episodes';
import { Layout } from '../layout/Layout';

const EpisodesIndexPage: React.FC = () => {
  const views = episodes.map(episode => {
    return <EpisodeRow key={episode.number} episode={episode}/>;
  });

  return (
    <Layout
      url='https://codelunch.fm'
      title='CodeLunch.fm'
      description='Technical topics that software engineers talk about at lunch.'
    >
      <div className='content episodes'>
        {views}
      </div>
    </Layout>
  );
};

export default EpisodesIndexPage;
