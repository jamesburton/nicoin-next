import { Html, Head, Main, NextScript } from 'next/document'
import CssBaseline from '@mui/material/CssBaseline';

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <CssBaseline />
        <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}