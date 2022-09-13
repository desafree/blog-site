import classes from './Posts.module.scss';
import GridPosts from './GridPosts';
import SideBar from './SideBar';
import { useContext, useState } from 'react';
import postContext from '../../context/postsContext';

const Posts = () => {
  const posts = useContext(postContext).posts;
  const [activeCategory, setActiveCategory] = useState('All-Posts');
  const filteredPost = posts.filter((post) => {
    if (activeCategory === 'All-Posts') return true;
    if (post.category === activeCategory) return true;
  });

  const changeActiveCategory = (newCategory: string) => {
    setActiveCategory(newCategory);
  };

  return (
    <section className={classes.container}>
      <GridPosts posts={filteredPost}></GridPosts>
      <SideBar
        changeActiveCategory={changeActiveCategory}
        posts={filteredPost}
      ></SideBar>
    </section>
  );
};

export default Posts;
