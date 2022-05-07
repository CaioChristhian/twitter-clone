import type { NextPage } from 'next';
import Head from 'next/head';

import Feed from '../components/Feed';
import SideBar from '../components/SideBar';
import Widgets from '../components/Widgets';

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Twitter Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='grid grid-cols-9'>
        <SideBar />
          
        <Feed />

        <Widgets />
      </main>      
    </div>
  )
};

export default Home;
