import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import Disclaimer from '../components/shared/Disclaimer';
import Navigation from '../components/shared/Navigation';
import Footer from '../components/shared/Footer';
import NavigationMobile from '../components/shared/NavigationMobile';
import PostsContextProvider from '../context/postsContextProvider';
import CommentsContextProvider from '../context/commentsContextProvider';
import NotificationsContextProvider from '../context/notificationsContextProvider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NotificationsContextProvider>
        <PostsContextProvider>
          <CommentsContextProvider>
            <Disclaimer></Disclaimer>
            <Navigation></Navigation>
            <NavigationMobile></NavigationMobile>
            <Component {...pageProps} />
            <Footer></Footer>
          </CommentsContextProvider>
        </PostsContextProvider>
      </NotificationsContextProvider>
    </>
  );
}

export default MyApp;
