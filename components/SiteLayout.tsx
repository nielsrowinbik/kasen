import Head from 'next/head';
import { useRouter } from 'next/router';

import type { PropsWithChildren } from 'react';

import Footer from './Footer';
import Nav from './Nav';

type ContainerProps = PropsWithChildren<{}>;

const Container = ({ children }: ContainerProps) => {
  const router = useRouter();
  const meta: Record<string, string> = {
    title: 'Kasen',
    description: 'TODO: Set description',
    type: 'website',
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://nielsbik.nl${router.asPath}`}
        />
        <link rel="canonical" href={`https://nielsbik.nl${router.asPath}`} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Niels Bik" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <Nav />
      <main
        id="skip"
        className="flex flex-col justify-center px-8 w-full max-w-2xl mx-auto mb-16"
      >
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Container;
