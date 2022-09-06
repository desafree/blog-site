import classes from './PostDetail.module.scss';
import IntroPost from './IntroPost';
import PostBody from './PostBody';
import PostComments from './PostComments';
import CommentForm from './CommentForm';
import comment from '../../typescript/interface/comment';
import { FC } from 'react';

interface Props {
  comments: comment[];
}

const PostDetail: FC<Props> = ({ comments }) => {
  return (
    <div className={classes.container}>
      <IntroPost></IntroPost>
      <PostBody></PostBody>
      <PostComments comments={comments}></PostComments>
      <CommentForm></CommentForm>
    </div>
  );
};

export default PostDetail;
