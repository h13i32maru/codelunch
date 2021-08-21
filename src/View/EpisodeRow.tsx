import React from 'react';
import { Episode } from '../Type/Episode';
import { SpeakerView } from './SpeakerView';

type Props = {
  episode: Episode;
}

export const EpisodeRow: React.FC<Props> = (props) => {
  const { episode } = props;

  return (
    <article className='episode'>
      <a className='body' href={`/${episode.number}`}>
        <div className='date'>{episode.created.split('T')[0]}</div>
        <div className='title'><span className='number'>{episode.number}.</span>{episode.title}</div>
        <div className='desc'>{episode.desc}</div>
      </a>
      <div className='speakers'>
        {
          episode.speakers.map(speaker => <SpeakerView speaker={speaker}/>)
        }
      </div>
    </article>
  );
};
