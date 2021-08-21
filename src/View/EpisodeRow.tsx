import React from 'react';
import { Episode } from '../Type/Episode';
import { SpeakersView } from './SpeakersView';
import { EpisodeLayout } from './EpisodeLayout';

type Props = {
  episode: Episode;
}

export const EpisodeRow: React.FC<Props> = (props) => {
  const { episode } = props;

  return (
    <EpisodeLayout episode={episode} enableLink={true} enableTweet={false}>
      <SpeakersView speakers={episode.speakers}/>
    </EpisodeLayout>
  );
};
