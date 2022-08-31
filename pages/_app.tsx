import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import Disclaimer from '../components/shared/Disclaimer';
import Navigation from '../components/shared/Navigation';
import Footer from '../components/shared/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Disclaimer></Disclaimer>
      <Navigation></Navigation>
      <Component {...pageProps} />
      <Footer></Footer>
    </>
  );
}

export default MyApp;
