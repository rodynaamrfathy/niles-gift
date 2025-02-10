import { useEffect } from 'react';
import '../styles/globals.css'; // Adjust the path to your global styles

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const element = document.querySelector('html');
    if (element && element.hasAttribute('bbai-tooltip-injected')) {
      element.removeAttribute('bbai-tooltip-injected');
    }
  }, []); // Empty dependency array ensures this runs only once on mount

  return <Component {...pageProps} />;
}

export default MyApp;