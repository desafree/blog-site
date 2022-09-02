import classes from './CategoryPosts.module.scss';
import Posts from './Posts';
import Sidebar from './Sidebar';

const CategoryPost = () => {
  return (
    <section className={classes.container}>
      <Sidebar></Sidebar>
      <Posts></Posts>
    </section>
  );
};

export default CategoryPost;
