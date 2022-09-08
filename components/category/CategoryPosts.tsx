import { useRouter } from 'next/router';
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
  const router = useRouter();
  const filteredPosts = posts.filter((post) => {
    if (router.query.category === 'All-Posts') return true;
    if (post.category === router.query.category) return true;
  });

  return (
    <section className={classes.container}>
      <Sidebar category={category}></Sidebar>
      <Posts posts={filteredPosts}></Posts>
    </section>
  );
};

export default CategoryPost;
