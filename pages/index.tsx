import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home({title}:{title:String}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Events  App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <nav>
          <img />
          <a href='/'> Home</a>
          <a href='/events'> Events</a>
          <a href='/about-us'> About Us</a>
        </nav>
      </header>
      <main className={styles.main}>
        <a href=''>
          <img></img>
          <h2>Events in {title}</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
          <h2>Events in San Francisco</h2>
          <p>quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
          <h2>Events in Barcelona</h2>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
        </a>
      </main>
      <footer className={styles.footer}>
        <p>CopyLeft 3022</p>
      </footer>
      </div>
  )
}

export async function getServerSideProps() {
  const {events_categories} = await require('/data/data.json');
  console.log(events_categories);

  return {
    props: {
      title: "~Busssss~",
    },
  };
}