import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/index.module.css";
import Mainbody from '../components/Mainbody';
import Sidebar from '../components/Sidebar';



const Home: any | NextPage = () => {
  
  return (
    <div className={styles.container}>
      <Head>
        <title>GAME HUB</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className = {styles.backdrop}>
      <Sidebar/>
      <Mainbody/>
      </div>
    </div>
  );
};

export default Home;

