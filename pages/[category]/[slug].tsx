import type { NextPage, GetServerSideProps } from 'next';
import Post from '../../components/post/Post';
import { MongoClient } from 'mongodb';
import comment from '../../typescript/interface/comment';
import post from '../../typescript/interface/post';
import { useContext, useEffect } from 'react';
import commentContext from '../../context/commentsContext';

interface Props {
  comments: comment[];
  post: post;
  relatedPost: post[];
}

const PostDetail: NextPage<Props> = ({ post, relatedPost }) => {
  const commentsCtx = useContext(commentContext);
  useEffect(() => {
    commentsCtx.updateComments();
  }, []);

  return (
    <>
      <Post post={post} relatedPost={relatedPost}></Post>
    </>
  );
};

export default PostDetail;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.bcs0k91.mongodb.net/?retryWrites=true&w=majority`
  );
  const db = client.db();
  const responseComments = await db.collection('comments').find().toArray();
  const postComment = responseComments.filter((comment) => {
    if (comment.postSlug === context.query.slug) return true;
  });
  const posts = await db.collection('posts').find().toArray();
  const [post] = posts.filter((post) => {
    if (
      post.category === context.query.category &&
      post.slug === context.query.slug
    )
      return true;
  });
  const relatedPosts = posts
    .filter((post) => {
      if (post.category === context.query.category) return true;
    })
    .slice(0, 1);
  client.close();
  const dataComments = JSON.parse(JSON.stringify(postComment));
  const dataPost = JSON.parse(JSON.stringify(post));
  const dataRelated = JSON.parse(JSON.stringify(relatedPosts));
  return {
    props: { comments: dataComments, post: dataPost, relatedPost: dataRelated },
  };
};
