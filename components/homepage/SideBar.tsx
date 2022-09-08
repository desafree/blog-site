import classes from './SideBar.module.scss';
import Categories from './Categories';
import RecentPost from './RecentPost';
import { FC } from 'react';
import post from '../../typescript/interface/post';

interface Props {
  changeActiveCategory: (newCategory: string) => void;
  posts: post[];
}

const SideBar: FC<Props> = ({ changeActiveCategory, posts }) => {
  return (
    <div className={classes.container}>
      <Categories changeActiveCategory={changeActiveCategory}></Categories>
      <RecentPost posts={posts}></RecentPost>
    </div>
  );
};

export default SideBar;
