import React from 'react';
import { Episode } from '../Type/Episode';
import { EpisodeRow } from '../View/EpisodeRow';
import { PageLayout } from '../PageLayout/PageLayout';

type Props = {
  episodes: Episode[];
}

export const EpisodesPage: React.FC<Props> = (props) => {
  const views = props.episodes.map(episode => {
    return <EpisodeRow key={episode.number} episode={episode}/>;
  });

  return (
    <PageLayout
      url='https://codelunch.fm'
      title='CodeLunch.fm'
      description='Technical topics that software engineers talk about at lunch.'
    >
      <div className='content episodes'>
        {views}
      </div>
    </PageLayout>
  );
};
