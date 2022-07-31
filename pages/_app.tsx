import '../styles/globals.css';
// import '@fontsource/playfair-display'; // TODO: Only import sizes that we use

import type { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default App;
