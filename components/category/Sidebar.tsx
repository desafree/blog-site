import classes from './Sidebar.module.scss';
import Intro from './Intro';
import Categories from './Categories';

const Sidebar = () => {
  return (
    <div className={classes.container}>
      <Intro></Intro>
      <Categories></Categories>
    </div>
  );
};

export default Sidebar;
