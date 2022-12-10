import { Head, Html, Main, NextScript } from 'next/document';

const Document = () => (
  <Html lang="en">
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="robots" content="noindex" />
    </Head>
    <body className="min-h-screen bg-gray-100 text-black">
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
