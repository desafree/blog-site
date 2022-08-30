import type { NextPage } from 'next';
import Featured from '../components/homepage/Featured';
import Posts from '../components/homepage/Posts';
import Layout from '../components/ui/Layout';

const Home: NextPage = () => {
  return (
    <>
      <Featured></Featured>
      <Layout>
        <Posts></Posts>
      </Layout>
    </>
  );
};

export default Home;
