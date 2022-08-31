import classes from './PostDetail.module.scss';
import IntroPost from './IntroPost';
import PostBody from './PostBody';

const PostDetail = () => {
  return (
    <div className={classes.container}>
      <IntroPost></IntroPost>
      <PostBody></PostBody>
    </div>
  );
};

export default PostDetail;
