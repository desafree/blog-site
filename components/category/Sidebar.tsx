import classes from './Sidebar.module.scss';
import Intro from './Intro';
import Categories from './Categories';
import { useContext } from 'react';
import postContext from '../../context/postsContext';

const Sidebar = () => {
  const category = useContext(postContext).category;
  return (
    <div className={classes.container}>
      <Intro category={category}></Intro>
      <Categories></Categories>
    </div>
  );
};

export default Sidebar;
