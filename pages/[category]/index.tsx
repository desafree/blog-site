import type { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import CategoryPosts from '../../components/category/CategoryPosts';
import { MongoClient } from 'mongodb';
import category from '../../typescript/interface/category';
import post from '../../typescript/interface/post';
import { useContext } from 'react';
import postsContext from '../../context/postsContext';
import Loading from '../../components/shared/Loading';

interface Props {
  category: category;
  posts: post[];
}

const Category: NextPage<Props> = ({ category, posts }) => {
  const postsCtx = useContext(postsContext);
  postsCtx.updateCategory(category);
  postsCtx.updatePosts(posts);

  return (
    <>
      {postsCtx.posts.length > 0 && postsCtx.category.name ? (
        <>
          <CategoryPosts></CategoryPosts>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Category;

export const getStaticPaths: GetStaticPaths = async () => {
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.bcs0k91.mongodb.net/?retryWrites=true&w=majority`
  );
  const db = client.db();
  const response = await db.collection('category').find().toArray();
  const paths = response.map((category) => {
    return {
      params: { category: category.name },
    };
  });
  client.close();
  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.bcs0k91.mongodb.net/?retryWrites=true&w=majority`
  );
  const db = client.db();
  const responseCategory = await db.collection('category').find().toArray();
  const responsePosts = await db
    .collection('posts')
    .find()
    .sort({ created: -1 })
    .toArray();
  client.close();
  const category = responseCategory.filter((item) => {
    if (item.name === context?.params?.category) return true;
  });
  const posts = responsePosts.filter((item) => {
    if (context?.params?.category === 'All-Posts') return true;
    if (item.category === context?.params?.category) return true;
  });
  const categoryData = JSON.parse(JSON.stringify(category[0]));
  const postsData = JSON.parse(JSON.stringify(posts));

  return {
    props: { category: categoryData, posts: postsData },
    revalidate: 1000,
  };
};
