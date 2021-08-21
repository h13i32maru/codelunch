import React from 'react';
import { Episode } from '../Type/Episode';
import { EpisodeDetail } from '../View/EpisodeDetail';
import { PageLayout } from '../PageLayout/PageLayout';

type Props = {
  episode: Episode;
}

export const EpisodeDetailPage: React.FC<Props> = (props) => {
  const { episode } = props;

  return (
    <PageLayout
      url={`https://codelunch.fm/${episode.number}`}
      title={`${episode.number}. ${episode.title} | CodeLunch.fm`}
      description={episode.desc}
    >
      <div className='content'>
        <EpisodeDetail episode={episode}/>
      </div>
    </PageLayout>
  );
};
