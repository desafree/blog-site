import classes from './SideBar.module.scss';
import Categories from './Categories';
import RecentPost from './RecentPost';

const SideBar = () => {
  return (
    <div className={classes.container}>
      <Categories></Categories>
      <RecentPost></RecentPost>
    </div>
  );
};

export default SideBar;
