import classes from './PostDetail.module.scss';
import IntroPost from './IntroPost';
import PostBody from './PostBody';
import PostComments from './PostComments';
import CommentForm from './CommentForm';
import { FC, useState } from 'react';
import post from '../../typescript/interface/post';

interface Props {
  post: post;
}

const PostDetail: FC<Props> = ({ post }) => {
  return (
    <div className={classes.container}>
      <IntroPost post={post}></IntroPost>
      <PostBody post={post}></PostBody>
      <PostComments></PostComments>
      <CommentForm></CommentForm>
    </div>
  );
};

export default PostDetail;
