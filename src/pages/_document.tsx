import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <script
          async
          src='https://umami.pufler.dev/script.js'
          data-website-id='b4b7a77d-7038-49a9-b828-54533e0286c7'
        ></script>
      </Head>
      <body>
        <Main />

        <NextScript />
      </body>
    </Html>
  );
}
