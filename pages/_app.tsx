import '../styles/globals.scss';
import type { AppProps } from 'next/app';

import Footer from '../components/shared/Footer';
import PostsContextProvider from '../context/postsContextProvider';
import CommentsContextProvider from '../context/commentsContextProvider';
import NotificationsContextProvider from '../context/notificationsContextProvider';
import gsap from 'gsap';
import Head from 'next/head';

gsap.config({ nullTargetWarn: false });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NotificationsContextProvider>
        <PostsContextProvider>
          <CommentsContextProvider>
            <Head>
              <title>Blog Project</title>
              <meta
                name="description"
                content="Personal project of Nicola De Sanctis"
              ></meta>
            </Head>
            <Component {...pageProps} />
            <Footer></Footer>
          </CommentsContextProvider>
        </PostsContextProvider>
      </NotificationsContextProvider>
    </>
  );
}

export default MyApp;
