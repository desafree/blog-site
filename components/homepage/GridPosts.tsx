import classes from './GridPost.module.scss';
import GridItem from './GridItem';
import post from '../../typescript/interface/post';
import { FC } from 'react';

interface Props {
  posts: post[];
}

const GridPosts: FC<Props> = ({ posts }) => {
  return (
    <div className={classes.container}>
      {posts.map((post) => {
        return <GridItem key={post._id.toString()} post={post}></GridItem>;
      })}
    </div>
  );
};

export default GridPosts;
