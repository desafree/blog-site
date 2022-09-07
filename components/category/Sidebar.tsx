import classes from './Sidebar.module.scss';
import Intro from './Intro';
import Categories from '../homepage/Categories';
import category from '../../typescript/interface/category';
import { FC } from 'react';

interface Props {
  category: category;
}

const Sidebar: FC<Props> = ({ category }) => {
  return (
    <div className={classes.container}>
      <Intro category={category}></Intro>
      <Categories></Categories>
    </div>
  );
};

export default Sidebar;
