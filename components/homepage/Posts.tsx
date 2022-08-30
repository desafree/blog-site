import classes from './Posts.module.scss';
import GridPosts from './GridPosts';
import SideBar from './SideBar';

const Posts = () => {
  return (
    <section className={classes.container}>
      <GridPosts></GridPosts>
      <SideBar></SideBar>
    </section>
  );
};

export default Posts;
