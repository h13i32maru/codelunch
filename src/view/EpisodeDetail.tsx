import React from 'react';
import { Episode } from '../type/Episode';
import { NoticeView } from './NoticeView';
import { SpeakersView } from './SpeakersView';
import { NotesView } from './NotesView';
import { EpisodeLayout } from './EpisodeLayout';

type Props = {
  episode: Episode;
}

export const EpisodeDetail: React.FC<Props> = (props) => {
  const { episode } = props;

  return (
    <EpisodeLayout episode={episode} enableLink={false} enableTweet={true}>
      <NoticeView notice={episode.notice}/>
      <iframe src={episode.url} height='102px' width='100%' frameBorder='0' scrolling='no'/>
      <SpeakersView speakers={episode.speakers}/>
      <NotesView notes={episode.notes}/>
    </EpisodeLayout>
  );
};
