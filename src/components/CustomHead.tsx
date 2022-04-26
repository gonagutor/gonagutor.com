import { useTranslation } from 'react-i18next';
import Head from 'next/head';
import React from 'react';

const CustomHead = () => {
  const { t } : { t: any} = useTranslation('head');

  return (
    <Head>
      <title>{t('title')}</title>
      <meta name="description" content={t('description')} />
      <meta property="og:title" content={t('shortDescription')} />
      <meta property="og:url" content={t('url')} />
      <meta property="og:description" content={t('shorterDescription')} />
      <meta property="og:image" content={t('previewImage')} />
      <meta name="viewport" content="initial-scale=1.0, width=device-width, user-scalable=no" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700;800&display=swap" rel="stylesheet" />
    </Head>
  );
};

export default CustomHead;
