import type { NextPage, GetServerSideProps } from 'next';
import Post from '../../components/post/Post';
import { MongoClient } from 'mongodb';
import post from '../../typescript/interface/post';
import { useContext, useEffect } from 'react';
import commentContext from '../../context/commentsContext';
import { useRouter } from 'next/router';

interface Props {
  post: post;
  relatedPost: post[];
  postTime: { next: post; prev: post };
}

const PostDetail: NextPage<Props> = ({ post, relatedPost, postTime }) => {
  console.log(postTime);
  const commentsCtx = useContext(commentContext);
  const slug = useRouter().query.slug;
  useEffect(() => {
    commentsCtx.updateComments();
  }, [slug]);

  return (
    <>
      <Post post={post} relatedPost={relatedPost} postTime={postTime}></Post>
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
  const postOrdered = posts.sort((a, b) => {
    if (a.created > b.created) return -1;
    else return 1;
  });
  const [post] = posts.filter((post) => {
    if (
      post.category === context.query.category &&
      post.slug === context.query.slug
    )
      return true;
  });
  const postIndex = postOrdered.findIndex((postItem) => {
    if (postItem === post) return true;
    return false;
  });
  console.log(postIndex);
  const postNext =
    postIndex === postOrdered.length - 1 ? null : postOrdered[postIndex + 1];
  const postPrev = postIndex === 0 ? null : postOrdered[postIndex - 1];
  const relatedPosts = posts
    .filter((post) => {
      if (
        post.category === context.query.category &&
        post.slug !== context.query.slug
      )
        return true;
    })
    .slice(0, 1);
  client.close();
  const dataComments = JSON.parse(JSON.stringify(postComment));
  const dataPost = JSON.parse(JSON.stringify(post));
  const dataRelated = JSON.parse(JSON.stringify(relatedPosts));
  const dataPostNext = JSON.parse(JSON.stringify(postNext));
  const dataPostPrev = JSON.parse(JSON.stringify(postPrev));
  return {
    props: {
      comments: dataComments,
      post: dataPost,
      relatedPost: dataRelated,
      postTime: { next: dataPostNext, prev: dataPostPrev },
    },
  };
};
