import React from 'react';
import Head from 'next/head';

type Props = {
  url: string;
  title: string;
  description: string;
}

export const Layout: React.FC<Props> = (props) => {
  return (
    <div>
      <Head>
        <meta charSet='utf-8'/>
        <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'/>
        <title>{props.title}</title>
        <meta name='description' content={props.description}/>
        <link rel='shortcut icon' href='/image/artwork.jpg'/>

        <meta property='og:url' content={props.url}/>
        <meta property='og:site_name' content='CodeLunch.fm'/>
        <meta property='og:title' content={props.title}/>
        <meta property='og:description' content={props.description}/>
        <meta property='og:type' content='website'/>
        <meta property='og:author' content='https://twitter.com/h13i32maru'/>
        <meta property='og:image' content='https://codelunch.fm/image/artwork.jpg'/>
        <meta property='og:image:width' content='512'/>
        <meta property='og:image:height' content='512'/>

        <meta property='twitter:card' content='summary'/>
        <meta property='twitter:site' content='@h13i32maru'/>
        <meta property='twitter:creator' content='@h13i32maru'/>
        <meta property='twitter:title' content={props.title}/>
        <meta property='twitter:description' content={props.description}/>
        <meta property='twitter:image:src' content='https://codelunch.fm/image/artwork.jpg'/>
        <meta property='twitter:image:width' content='512'/>
        <meta property='twitter:image:height' content='512'/>

        <link rel='stylesheet' type='text/css' href='/css/style.css'/>
      </Head>

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
          <a href='https://open.spotify.com/show/3vVss8nt0eT89tqrac0UAN' target='_blank'><img
            src='/image/spotify.png'/></a>
        </div>
        <div>Technical topics that software engineers talk about at lunch.</div>
      </header>

      {props.children}

      <footer>
        Copyright 2013 - {new Date().getFullYear()} by <a href='https://twitter.com/h13i32maru' target='_blank'>Ryo
        Maruyama</a> all
        right reserved.
      </footer>
    </div>
  );
};
