import React from 'react';
import { Episode } from '../Type/Episode';
import { HeadView } from '../View/HeadView';
import { BodyView } from '../View/BodyView';
import { EpisodeDetail } from '../View/EpisodeDetail';

type Props = {
  episode: Episode;
}

export const EpisodeDetailPage: React.FC<Props> = (props) => {
  return (
    <html>
      <HeadView
        url='https://codelunch.fm'
        title='CodeLunch.fm'
        description='Technical topics that software engineers talk about at lunch.'
      />
      <BodyView>
        <EpisodeDetail episode={props.episode}/>
      </BodyView>
    </html>
  );
};
