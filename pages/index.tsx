import { MongoClient } from 'mongodb';
import type { NextPage, GetStaticProps } from 'next';
import Featured from '../components/homepage/Featured';
import Posts from '../components/homepage/Posts';
import Layout from '../components/ui/Layout';
import post from '../typescript/interface/post';
import Newsletter from '../components/homepage/Newsletter';
import { useContext } from 'react';
import postContext from '../context/postsContext';
import Notification from '../components/shared/Notification';
import notificationContext from '../context/notificationsContext';
import Loading from '../components/shared/Loading';
import useScrollToTop from '../hooks/useScrollTop';
import Disclaimer from '../components/shared/Disclaimer';
import Navigation from '../components/shared/Navigation';
import NavigationMobile from '../components/shared/NavigationMobile';

interface Props {
  posts: post[];
}

const Home: NextPage<Props> = ({ posts }) => {
  useScrollToTop();
  const postsContext = useContext(postContext);
  const notification = useContext(notificationContext).type;
  postsContext.updatePosts(posts);

  return (
    <>
      {postsContext.posts.length > 0 ? (
        <>
          <Disclaimer></Disclaimer>
          <Navigation></Navigation>
          <NavigationMobile></NavigationMobile>
          <Featured></Featured>
          <Layout>
            <Posts></Posts>
          </Layout>
          {notification.length > 0 && <Notification></Notification>}

          <Newsletter></Newsletter>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.bcs0k91.mongodb.net/?retryWrites=true&w=majority`
  );
  const db = client.db();
  const response = await db
    .collection('posts')
    .find()
    .sort({ created: -1 })
    .toArray();
  client.close();
  const data = JSON.parse(JSON.stringify(response));
  return {
    props: { posts: data },
  };
};
