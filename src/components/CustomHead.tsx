import Head from 'next/head';
import React from 'react';

const CustomHead = () => (
  <Head>
    <title>Gonagutor - Fullstack Developer</title>
    <meta name="description" content="Hi! I'm Gonzalo, a fullstack developer. I love programming and doing cool things. I do front-end for websites, WebApps, apps and back-end" />
    <meta property="og:title" content="Hi! I'm Gonzalo a fullstack developer. And I love cool projects" />
    <meta property="og:url" content="https://www.gonagutor.com" />
    <meta property="og:description" content="Gonzalo - Fullstack developer" />
    <meta property="og:image" content="/images/projects/website.jpg" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width, user-scalable=no" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700;800&display=swap" rel="stylesheet" />
  </Head>
);

export default CustomHead;
