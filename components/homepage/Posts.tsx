import classes from './Posts.module.scss';
import GridPosts from './GridPosts';
import SideBar from './SideBar';
import post from '../../typescript/interface/post';
import { FC } from 'react';

interface Props {
  posts: post[];
}

const Posts: FC<Props> = ({ posts }) => {
  return (
    <section className={classes.container}>
      <GridPosts posts={posts}></GridPosts>
      <SideBar></SideBar>
    </section>
  );
};

export default Posts;
