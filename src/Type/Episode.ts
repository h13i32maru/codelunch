import { Speaker } from './Speaker';

export type Episode = {
  number: number;
  title: string;
  created: string;
  desc: string;
  length: string;
  url: string;
  speakers: Speaker[];
  notes: {text: string; url: string}[];
  notice?: string;
};

