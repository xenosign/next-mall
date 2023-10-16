import Container from "@/components/Container";
import Header from "@/components/Header";
import { ThemeProvider } from "@/lib/ThemeContext";
import "@/styles/globals.css";
import Head from "next/head";
import { Black_Han_Sans } from 'next/font/google';

const blackHanSans = Black_Han_Sans({
  weight: ['400'],
  subsets: [],
});


export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Next-Mall</title>
        <link rel="icon" href="/favicon.png" />
        <style>
          {`
            html {
              font-family: ${blackHanSans.style.fontFamily}, sans-serif;
            }
        ` }
        </style>
      </Head>
      <ThemeProvider>
        <Header />
        <Container>
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    </>
  );
}
