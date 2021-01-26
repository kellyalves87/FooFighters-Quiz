/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Head from 'next/head';

export default function Home({ title, description, bg }) {
  return (
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:locale" content="pt_BR" />

      <meta property="og:title" content={title} />
      <meta property="og:site_name" content="FooFightersQuiz" />

      <meta property="og:description" content={description} />
      <meta property="og:image" content={bg} />
      <meta property="og:image:type" content="image/jpg" />
      <meta property="og:image:width" content="1920" />
      <meta property="og:image:height" content="1080" />
      <meta property="og:type" content="website" />
    </Head>
  );
}
