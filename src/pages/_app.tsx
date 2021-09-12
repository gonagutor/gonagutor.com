import React from 'react';
import '../../styles/styles.css';
import '../../styles/NavBar.css';
import '../../styles/icon-works.css';

export default function MyApp({ Component, pageProps } : any) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />;
}
