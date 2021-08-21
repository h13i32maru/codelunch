import { Speaker } from './Speaker';
import { Note } from './Note';

export type Episode = {
  number: number;
  title: string;
  created: string;
  desc: string;
  length: string;
  url: string;
  speakers: Speaker[];
  notes: Note[];
  notice?: string;
};

