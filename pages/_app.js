import { createGlobalStyle, ThemeProvider } from 'styled-components';
import db from '../db.json';
import Head from 'next/head';

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 0;
  /* New styles */
  display: flex;
  flex-direction: column;
  font-family: 'Lato', sans-serif;
  // Deixa branco no começo
  
}
html, body {
  min-height: 100vh;
}
#__next {
  flex: 1;
  display: flex;
  flex-direction: column;
}
`

const theme = db.theme;

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,700;1,300;1,900&display=swap" rel="stylesheet" /> 
    <title>Star Wars Quiz</title>
     </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
