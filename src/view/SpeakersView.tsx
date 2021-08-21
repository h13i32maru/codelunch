import React from 'react';
import { Speaker } from '../type/Speaker';

type Props = {
  speakers: Speaker[];
}

export const SpeakersView: React.FC<Props> = (props) => {
  const views = props.speakers.map(speaker => {
    return (
      <a href={speaker.url} target='_blank' key={speaker.url}>
        <img src={speaker.icon}/>
      </a>
    );
  });

  return (
    <div className='speakers'>
      {views}
    </div>
  );
};
