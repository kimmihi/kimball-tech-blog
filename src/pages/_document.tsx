import { Html, Head, Main, NextScript } from "next/document";
import Header from "components/Layout/Header";
import Navbar from "components/Layout/Navbar";

export default function Document() {
  return (
    <Html>
      <Head></Head>
      <body>
        <Header />
        <Navbar />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
