import classes from './Posts.module.scss';
import PostPreview from './PostPreview';
import { useContext } from 'react';
import postContext from '../../context/postsContext';

const Posts = () => {
  const posts = useContext(postContext).posts;

  return (
    <div className={classes.container}>
      {posts.map((post) => {
        return (
          <PostPreview key={post._id.toString()} post={post}></PostPreview>
        );
      })}
    </div>
  );
};

export default Posts;
