import { MongoClient } from 'mongodb';
import type { NextPage, GetStaticProps } from 'next';
import Featured from '../components/homepage/Featured';
import Posts from '../components/homepage/Posts';
import Layout from '../components/ui/Layout';
import post from '../typescript/interface/post';
import Newsletter from '../components/homepage/Newsletter';
import { useContext } from 'react';
import postContext from '../context/postsContext';

interface Props {
  posts: post[];
}

const Home: NextPage<Props> = ({ posts }) => {
  const postsContext = useContext(postContext);
  postsContext.updatePosts(posts);

  return (
    <>
      {postsContext.posts.length > 0 && (
        <>
          <Featured></Featured>
          <Layout>
            <Posts></Posts>
          </Layout>
          <Newsletter></Newsletter>
        </>
      )}
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async (context) => {
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.bcs0k91.mongodb.net/?retryWrites=true&w=majority`
  );
  const db = client.db();
  const response = await db.collection('posts').find().toArray();
  client.close();
  const data = JSON.parse(JSON.stringify(response));
  return {
    props: { posts: data },
    revalidate: 1000,
  };
};
