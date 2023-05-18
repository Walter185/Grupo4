import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
import Barra from '@/components/nav';
import Carousel from '@/components/Carousel';
import RandomCards from '@/components/RandomCards';
import Footer from '@/components/Footer';
import Chat from '@/components/Chat';
import styles from '@/styles/Home.module.css';
import ContextWrapper from '@/components/ContextWrapper';
import Layout from '@/components/layout';

export default function Home() {

  return (
    <div>
  <ContextWrapper>
      <Head>
        <title>Pedilo Ya</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/P.png" />
      </Head>
      
      <main className={styles.main}>
      <Layout>
        <Barra> </Barra>     

         <Carousel />
        <RandomCards />
        </Layout>

      </main>
          <Chat />
        <Footer />
        </ContextWrapper>
      </div>
 

  )
}
