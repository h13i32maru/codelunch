import React from 'react';
import { Speaker } from '../Type/Speaker';

type Props = {
  speaker: Speaker;
}

export const SpeakerView: React.FC<Props> = (props) => {
  return (
    <a href={props.speaker.url}>
      <img src={props.speaker.icon}/>
    </a>
  );
};
