import React from 'react';
import { Episode } from '../Type/Episode';
import { HeadView } from '../View/HeadView';
import { BodyView } from '../View/BodyView';
import { EpisodeRow } from '../View/EpisodeRow';

type Props = {
  episodes: Episode[];
}

export const EpisodesPage: React.FC<Props> = (props) => {
  return (
    <html>
      <HeadView
        url='https://codelunch.fm'
        title='CodeLunch.fm'
        description='Technical topics that software engineers talk about at lunch.'
      />
      <BodyView>
        {
          props.episodes.map(episode => <EpisodeRow episode={episode}/>)
        }
      </BodyView>
    </html>
  );
};
