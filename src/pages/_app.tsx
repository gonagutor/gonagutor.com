import React from 'react';
import '../../styles/styles.css';
import '../../styles/NavBar.css';
import '../../styles/icon-works.css';
import { init } from 'emailjs-com';
import '../../i18next.config';

const MyApp = ({ Component, pageProps } : any) => {
  init('user_WCvjIgaYbgko5XD2miGet');
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />;
};

export default MyApp;
