import classes from './Posts.module.scss';
import PostPreview from './PostPreview';

const Posts = () => {
  return (
    <div className={classes.container}>
      <PostPreview></PostPreview>
      <PostPreview></PostPreview>
      <PostPreview></PostPreview>
      <PostPreview></PostPreview>
      <PostPreview></PostPreview>
      <PostPreview></PostPreview>
    </div>
  );
};

export default Posts;
