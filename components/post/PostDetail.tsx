import classes from './PostDetail.module.scss';
import IntroPost from './IntroPost';
import PostBody from './PostBody';
import PostComments from './PostComments';
import CommentForm from './CommentForm';

const PostDetail = () => {
  return (
    <div className={classes.container}>
      <IntroPost></IntroPost>
      <PostBody></PostBody>
      <PostComments></PostComments>
      <CommentForm></CommentForm>
    </div>
  );
};

export default PostDetail;
