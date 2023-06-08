import Head from 'next/head';
import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';

const MyApp = ({ Component, pageProps }:any) => (
  <>
  <ThemeProvider attribute='class'>
  <Head>
      <title>Om's Portfolio</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Component {...pageProps} />
  </ThemeProvider>
  </>
);

export default MyApp;
