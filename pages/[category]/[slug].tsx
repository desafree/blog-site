import type { NextPage, GetStaticProps } from 'next';
import Post from '../../components/post/Post';
import { MongoClient } from 'mongodb';
import post from '../../typescript/interface/post';
import { useContext, useEffect } from 'react';
import commentContext from '../../context/commentsContext';
import { useRouter } from 'next/router';
import notificationContext from '../../context/notificationsContext';
import Notification from '../../components/shared/Notification';
import useScrollToTop from '../../hooks/useScrollTop';
import Disclaimer from '../../components/shared/Disclaimer';
import Navigation from '../../components/shared/Navigation';
import NavigationMobile from '../../components/shared/NavigationMobile';
import Head from 'next/head';

interface Props {
  post: post;
  relatedPost: post[];
  postTime: { next: post; prev: post };
}

const PostDetail: NextPage<Props> = ({ post, relatedPost, postTime }) => {
  useScrollToTop();
  const notification = useContext(notificationContext).type;
  const commentsCtx = useContext(commentContext);
  const slug = useRouter().query.slug;
  useEffect(() => {
    commentsCtx.updateComments();
  }, [slug]);

  return (
    <>
      <Head>
        <title>{post.text.title.primary}</title>
        <meta name="description" content={post.text.paragraph.preview}></meta>
      </Head>
      <Disclaimer></Disclaimer>
      <Navigation></Navigation>
      <NavigationMobile></NavigationMobile>
      <Post post={post} relatedPost={relatedPost} postTime={postTime}></Post>
      {notification.length > 0 && <Notification></Notification>}
    </>
  );
};

export default PostDetail;

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.bcs0k91.mongodb.net/?retryWrites=true&w=majority`
  );
  const db = client.db();
  const posts = await db.collection('posts').find().toArray();
  const paths = posts.map((post) => {
    return { params: { category: post.category, slug: post.slug } };
  });
  return {
    paths: paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async (context) => {
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.bcs0k91.mongodb.net/?retryWrites=true&w=majority`
  );
  const db = client.db();
  const responseComments = await db.collection('comments').find().toArray();
  const postComment = responseComments.filter((comment) => {
    if (comment.postSlug === context.params?.slug) return true;
  });
  const posts = await db
    .collection('posts')
    .find()
    .sort({ created: -1 })
    .toArray();
  const [post] = posts.filter((post) => {
    if (
      post.category === context.params?.category &&
      post.slug === context.params?.slug
    )
      return true;
  });
  const postIndex = posts.findIndex((postItem) => {
    if (postItem === post) return true;
    return false;
  });
  const postNext = postIndex === posts.length - 1 ? null : posts[postIndex + 1];
  const postPrev = postIndex === 0 ? null : posts[postIndex - 1];
  const relatedPosts = posts
    .filter((post) => {
      if (
        post.category === context.params?.category &&
        post.slug !== context.params?.slug
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
