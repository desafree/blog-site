import classes from './Posts.module.scss';
import PostPreview from './PostPreview';
import post from '../../typescript/interface/post';
import { FC } from 'react';

interface Props {
  posts: post[];
}

const Posts: FC<Props> = ({ posts }) => {
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
