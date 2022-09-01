import classes from './Post.module.scss';
import PostDetail from './PostDetail';
import RelatedPosts from './ReletadPosts';

const Post = () => {
  return (
    <div className={classes.container}>
      <PostDetail></PostDetail>
      <RelatedPosts></RelatedPosts>
    </div>
  );
};

export default Post;
