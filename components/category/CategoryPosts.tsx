import classes from './CategoryPosts.module.scss';
import Intro from './Intro';
import Posts from './Posts';

const CategoryPost = () => {
  return (
    <section className={classes.container}>
      <Intro></Intro>
      <Posts></Posts>
    </section>
  );
};

export default CategoryPost;
