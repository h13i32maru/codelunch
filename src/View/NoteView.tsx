import React from 'react';
import { Note } from '../Type/Note';

type Props = {
  note: Note;
}

export const NoteView: React.FC<Props> = (props) => {
  return (
    <li className="note">
      <a href={props.note.url}>{props.note.text}</a>
    </li>
  );
};
