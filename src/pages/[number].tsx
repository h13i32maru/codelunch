import React from 'react';
import { EpisodeDetail } from '../view/EpisodeDetail';
import { Layout } from '../layout/Layout';
import { episodes } from '../episodes';
import { GetStaticPaths, GetStaticProps } from 'next';
import { Episode } from '../type/Episode';

type Props = {
  episode: Episode;
}

const EpisodeDetailPage: React.FC<Props> = (props) => {
  const { episode } = props;
  return (
    <Layout
      url={`https://codelunch.fm/${episode.number}`}
      title={`${episode.number}. ${episode.title} | CodeLunch.fm`}
      description={episode.desc}
    >
      <div className='content'>
        <EpisodeDetail episode={episode}/>
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const number = context.params?.number;
  if (number == null) return { notFound: true };

  const episode = episodes.find(episode => episode.number.toString() === number);
  if (episode == null) return { notFound: true };

  return { props: { episode } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = episodes.map(episode => {
    return { params: { number: episode.number.toString() } };
  });

  return {
    paths,
    fallback: false,
  };
};

export default EpisodeDetailPage;
