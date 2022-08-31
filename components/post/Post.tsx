import classes from './Post.module.scss';
import PostDetail from './PostDetail';
import RecentPost from '../homepage/RecentPost';

const Post = () => {
  return (
    <div className={classes.container}>
      <PostDetail></PostDetail>
      <RecentPost></RecentPost>
    </div>
  );
};

export default Post;
