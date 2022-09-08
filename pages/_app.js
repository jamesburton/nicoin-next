import '../styles/globals.css'
import Head from "next/head";
import DefaultLayout from '../layouts/DefaultLayout';
import CssBaseline from '@mui/material/CssBaseline';

function MyApp({ Component, pageProps }) {
  // return <Component {...pageProps} />
  const getLayout = Component.getLayout || DefaultLayout;
  return <>
    <Head>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      <CssBaseline />
    </Head>
    {getLayout(<Component {...pageProps} />)}
    </>;
}

export default MyApp
