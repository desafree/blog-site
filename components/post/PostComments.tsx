import classes from './PostComments.module.scss';
import Comment from './Comment';

const PostComments = () => {
  return (
    <div className={classes.container}>
      <h4>Comments</h4>
      <Comment></Comment>
      <Comment></Comment>
      <Comment></Comment>
    </div>
  );
};

export default PostComments;
