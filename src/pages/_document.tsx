import { Html, Head, Main, NextScript } from "next/document";
import Header from "components/Header";

export default function Document() {
  return (
    <Html>
      <Head>
        <title>{"Kimball's Tech Blog"}</title>
      </Head>
      <body>
        <Header />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
