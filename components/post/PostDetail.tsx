import classes from './PostDetail.module.scss';
import IntroPost from './IntroPost';
import PostBody from './PostBody';
import PostComments from './PostComments';
import CommentForm from './CommentForm';
import comment from '../../typescript/interface/comment';
import { FC } from 'react';
import post from '../../typescript/interface/post';

interface Props {
  comments: comment[];
  post: post;
}

const PostDetail: FC<Props> = ({ comments, post }) => {
  return (
    <div className={classes.container}>
      <IntroPost post={post}></IntroPost>
      <PostBody post={post}></PostBody>
      <PostComments comments={comments}></PostComments>
      <CommentForm></CommentForm>
    </div>
  );
};

export default PostDetail;
