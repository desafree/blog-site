import { FC } from 'react';
import category from '../../typescript/interface/category';
import post from '../../typescript/interface/post';
import classes from './CategoryPosts.module.scss';
import Posts from './Posts';
import Sidebar from './Sidebar';

interface Props {
  category: category;
  posts: post[];
}

const CategoryPost: FC<Props> = ({ category, posts }) => {
  return (
    <section className={classes.container}>
      <Sidebar category={category}></Sidebar>
      <Posts posts={posts}></Posts>
    </section>
  );
};

export default CategoryPost;
