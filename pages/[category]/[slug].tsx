import type { NextPage, GetServerSideProps } from 'next';
import Post from '../../components/post/Post';
import { MongoClient } from 'mongodb';
import comment from '../../typescript/interface/comment';

interface Props {
  comments: comment[];
}

const PostDetail: NextPage<Props> = ({ comments }) => {
  console.log(comments);
  return (
    <>
      <Post comments={comments}></Post>
    </>
  );
};

export default PostDetail;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.bcs0k91.mongodb.net/?retryWrites=true&w=majority`
  );
  const db = client.db();
  const response = await db.collection('comments').find().toArray();
  client.close();
  const data = JSON.parse(JSON.stringify(response));
  return {
    props: { comments: data },
  };
};
