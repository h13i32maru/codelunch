import React from 'react';
import { Note } from '../Type/Note';

type Props = {
  notes: Note[];
}

export const NotesView: React.FC<Props> = (props) => {
  const views = props.notes.map((note, index) => {
    return (
      <li className='note' key={index}>
        <a href={note.url}>{note.text}</a>
      </li>
    );
  });

  return (
    <div className='notes'>
      <div className='notes-label'>Show Notes</div>
      <ul>
        {views}
      </ul>
    </div>
  );
};
