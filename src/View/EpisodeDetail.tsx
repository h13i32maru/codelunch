import React from 'react';
import { Episode } from '../Type/Episode';
import { NoticeView } from './NoticeView';
import { SpeakerView } from './SpeakerView';
import { NoteView } from './NoteView';

type Props = {
  episode: Episode;
}

export const EpisodeDetail: React.FC<Props> = (props) => {
  const { episode } = props;

  const shareUrl = encodeURIComponent(`https://codelunch.fm/${episode.number}/`);
  const tweetUrl = `https://twitter.com/intent/tweet?url=${shareUrl}&hashtags=codelunchfm`;

  return (
    <article className='episode'>
      <div className='body'>
        <div className='date'>
          {episode.created.split('T')[0]}
          <a href={tweetUrl} className='share'>ツイート</a>
        </div>
        <div className='title'><span className='number'>{episode.number}.</span>{episode.title}</div>
        <div className='desc'>{episode.desc}</div>
      </div>
      <NoticeView notice={episode.notice}/>
      <iframe src={episode.url} height='102px' width='100%' frameBorder='0' scrolling='no'/>
      <div className='speakers'>
        {
          episode.speakers.map(speaker => <SpeakerView speaker={speaker}/>)
        }
      </div>
      <div className='notes'>
        <div className='notes-label'>Show Notes</div>
        <ul>
          {
            episode.notes.map(note => <NoteView note={note}/>)
          }
        </ul>
      </div>
    </article>
  );
};
