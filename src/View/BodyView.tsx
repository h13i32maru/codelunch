import React from 'react';

export const BodyView: React.FC = (props) => {
  return (
    <body>
      <div className='bg'/>

      <header>
        <a href='/'>
          <img src='/image/artwork.jpg' className='logo'/>
          <div className='title'>CodeLunch.fm</div>
        </a>
        <div className='icons'>
          <a href='https://twitter.com/h13i32maru' target='_blank'><img src='/image/twitter.png'/></a>
          <a href='https://anchor.fm/s/77d9b6c/podcast/rss' target='_blank'><img src='/image/rss.png'/></a>
          <a href='https://podcasts.apple.com/jp/podcast/codelunch-fm/id965805982' target='_blank'><img
            src='/image/podcast.png'/></a>
          <a href='https://open.spotify.com/show/3vVss8nt0eT89tqrac0UAN' target='_blank'><img src='/image/spotify.png'/></a>
        </div>
        <div>Technical topics that software engineers talk about at lunch.</div>
      </header>

      {props.children}

      <footer>
        Copyright 2013 - {new Date().getFullYear()} by <a href='https://twitter.com/h13i32maru' target='_blank'>Ryo
        Maruyama</a> all
        right reserved.
      </footer>
    </body>
  );
};
