import React from 'react';
import { Episode } from '../Type/Episode';

type Props = {
  episode: Episode;
  enableLink: boolean;
  enableTweet: boolean;
}

export const EpisodeLayout: React.FC<Props> = (props) => {
  const { episode } = props;

  const shareUrl = encodeURIComponent(`https://codelunch.fm/${episode.number}/`);
  const tweetUrl = `https://twitter.com/intent/tweet?url=${shareUrl}&hashtags=codelunchfm`;

  return (
    <article className='episode'>
      <a className='body' href={props.enableLink ? `/${episode.number}/` : undefined}>
        <div className='date'>{episode.created.split('T')[0]}</div>
        <div className='title'><span className='number'>{episode.number}.</span>{episode.title}</div>
        <div className='desc'>{episode.desc}</div>
      </a>
      {props.children}
      <div className='footer'>
        {
          props.enableTweet ?
            <a href={tweetUrl} className='share' target='_blank'>ツイート</a>
            :
            null
        }
      </div>
    </article>
  );
};
