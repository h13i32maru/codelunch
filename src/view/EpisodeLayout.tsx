import React from 'react';
import { Episode } from '../type/Episode';

type Props = {
  episode: Episode;
  enableLink: boolean;
  enableTweet: boolean;
}

export const EpisodeLayout: React.FC<Props> = (props) => {
  const { episode } = props;

  const onClickTwitterId = (ev: React.MouseEvent, twitterId: string) => {
    ev.preventDefault();
    window.open(`https://twitter.com/${twitterId.replace('@', '')}`, '_blank');
  };

  // テキストをtwitterIdと文章に区切る
  const descTokens = episode.desc.replace(/(@[0-9a-zA-Z_]+)/g, '|||$1|||').split('|||');
  const descViews = descTokens.map((descToken, index) => {
    if (descToken[0] === '@') {
      return (
        <span
          key={index}
          className='twitter-id'
          onClick={(ev) => onClickTwitterId(ev, descToken)}>
          {descToken}
      </span>
      );
    } else {
      return <span key={index}>{descToken}</span>;
    }
  });

  const shareUrl = encodeURIComponent(`https://codelunch.fm/${episode.number}/`);
  const tweetUrl = `https://twitter.com/intent/tweet?url=${shareUrl}&hashtags=codelunchfm`;

  return (
    <article className='episode'>
      <a className='body' href={props.enableLink ? `/${episode.number}/` : undefined}>
        <div className='date'>{episode.created.split('T')[0]}</div>
        <div className='title'><span className='number'>{episode.number}.</span>{episode.title}</div>
        <div className='desc'>{descViews}</div>
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
