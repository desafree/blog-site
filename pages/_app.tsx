import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import Disclaimer from '../components/shared/Disclaimer';
import Navigation from '../components/shared/Navigation';
import Footer from '../components/shared/Footer';
import NavigationMobile from '../components/shared/NavigationMobile';
import PostsContextProvider from '../context/postsContextProvider';
import CommentsContextProvider from '../context/commentsContextProvider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <PostsContextProvider>
        <CommentsContextProvider>
          <Disclaimer></Disclaimer>
          <Navigation></Navigation>
          <NavigationMobile></NavigationMobile>
          <Component {...pageProps} />
          <Footer></Footer>
        </CommentsContextProvider>
      </PostsContextProvider>
    </>
  );
}

export default MyApp;
