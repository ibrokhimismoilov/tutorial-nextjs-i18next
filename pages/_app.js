import '../styles/globals.css';
import styles from '../styles/Home.module.css';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ul>
        {
          router.locales.map(locale => {
            return (
              <li key={locale}>
                <Link
                  className={locale === router.locale ? "active" : ""}
                  href={router.asPath} locale={locale}>
                  <a>{locale}</a>
                </Link>
              </li>
            )
          })
        }
      </ul>

      <main className={styles.main}>
        < Component {...pageProps} />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" placeholder alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
export default MyApp
