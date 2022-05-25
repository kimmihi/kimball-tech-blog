import { Html, Head, Main, NextScript } from "next/document";
import Header from "components/Layout/Header";
import Navbar from "components/Layout/Navbar";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" href="/public/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
