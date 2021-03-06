import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Harusame</title>
        {/* <meta name="description" content="Generated by create next app" /> */}
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="">HARUSAME</a>
        </h1>

        <p className={styles.description}>
          Get started by editing description{' '}
          {/* <code className={styles.code}>pages/index.js</code> */}
        </p>

        <div className={styles.grid}>
          <a href="https://panda.harusame.us/1:/" className={styles.card}>
            <h2>Public Drive 1 &rarr;</h2>
            {/* <p>Find in-depth information about Next.js features and API.</p> */}
          </a>

          <a href="https://guest.harusame.us/1:/" className={styles.card}>
            <h2>Public Drive 2 &rarr;</h2>
            {/* <p>Learn about Next.js in an interactive course with quizzes!</p> */}
          </a>
		  
          <a href="https://panda.harusame.us/0:/" className={styles.card}>
            <h2>Private Drive &rarr;</h2>
            {/* <p>Learn about Next.js in an interactive course with quizzes!</p> */}
          </a>
        </div>
      </main>
	  
	  <script src="/js/contact-form.min.js" id="contactform"form_worker_url="https://contact.harusame.us"></script>

      {/* <footer className={styles.footer}>
        <a href="" target="_blank" rel="noopener noreferrer">
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  )
}
