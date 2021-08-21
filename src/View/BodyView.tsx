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
          <a href='https://twitter.com/h13i32maru'><img src='/image/twitter.png'/></a>
          <a href='https://anchor.fm/s/77d9b6c/podcast/rss'><img src='/image/rss.png'/></a>
          <a href='https://podcasts.apple.com/jp/podcast/codelunch-fm/id965805982'><img src='/image/podcast.png'/></a>
          <a href='https://open.spotify.com/show/3vVss8nt0eT89tqrac0UAN'><img src='/image/spotify.png'/></a>
        </div>
        <div>Technical topics that software engineers talk about at lunch.</div>
      </header>

      {props.children}

      <footer>
        Copyright 2013 - 2020 by <a href='https://twitter.com/h13i32maru'>Ryo Maruyama</a> all right reserved.
      </footer>
    </body>
  );
};
