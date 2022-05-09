import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';

import Feed from '../components/Feed';
import SideBar from '../components/SideBar';
import Widgets from '../components/Widgets';
import { fetchTweets } from '../utils/fetchTweets';
import { Tweet } from '../../typings';
import { Toaster } from 'react-hot-toast';

interface Props {
  tweets: Tweet[];
}

const Home = ({ tweets }: Props) => {
  console.log(tweets)

  return (
    <div className="lg:max-w-6xl mx-auto max-h-screen 
      overflow-hidden"
    >
      <Head>
        <title>Twitter Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Toaster />

      <main className='grid grid-cols-9'>
        <SideBar />
          
        <Feed tweets={tweets} />

        <Widgets />
      </main>      
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const tweets = await fetchTweets();
  
  return {
    props: {
      tweets,
    },
  };
};