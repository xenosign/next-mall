import Container from "@/components/Container";
import Header from "@/components/Header";
import { ThemeProvider } from "@/lib/ThemeContext";
import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Next-Mall</title>
        {/* 이미지에 따라서 적용 안될 수 있음 */}
        <link rel="icon" href="/favicon.png" />
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
