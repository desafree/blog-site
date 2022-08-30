import classes from './RecentPost.module.scss';
import PostPreview from './PostPreview';

const RecentPost = () => {
  return (
    <div className={classes.container}>
      <h4>Recent Post</h4>
      <PostPreview></PostPreview>
      <PostPreview></PostPreview>
    </div>
  );
};

export default RecentPost;
