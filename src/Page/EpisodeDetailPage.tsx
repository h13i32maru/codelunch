import React from 'react';
import { Episode } from '../Type/Episode';
import { HeadView } from '../View/HeadView';
import { BodyView } from '../View/BodyView';
import { EpisodeDetail } from '../View/EpisodeDetail';

type Props = {
  episode: Episode;
}

export const EpisodeDetailPage: React.FC<Props> = (props) => {
  const { episode } = props;

  return (
    <html lang='ja'>
      <HeadView
        url={`https://codelunch.fm/${episode.number}`}
        title={`${episode.number}. ${episode.title} | CodeLunch.fm`}
        description={episode.desc}
      />
      <BodyView>
        <div className='content'>
          <EpisodeDetail episode={episode}/>
        </div>
      </BodyView>
    </html>
  );
};
