import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Header from "components/Layout/Header";
import Navbar from "components/Layout/Navbar";
import Container from "components/Layout/Container";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <title>{"kimball's Tech Blog"}</title>
      </Head>

      <Header />
      <Navbar />
      <Container>
        <Component {...pageProps} />
      </Container>
    </>
  );
}

export default MyApp;
