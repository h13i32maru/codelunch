import React from 'react';

type Props = {
  url: string;
  title: string;
  description: string;
}

export const HeadView: React.FC<Props> = (props) => {
  return (
    <head>
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
    </head>
  );
};
