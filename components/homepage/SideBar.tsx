import classes from './SideBar.module.scss';
import Categories from './Categories';
import RecentPost from './RecentPost';
import { FC } from 'react';
import post from '../../typescript/interface/post';
import gsap from 'gsap';
import { useRef } from 'react';
import useLayoutEffect from '../../hooks/useIsomorphicLayoutEffect';

interface Props {
  changeActiveCategory: (newCategory: string) => void;
  posts: post[];
}

const SideBar: FC<Props> = ({ changeActiveCategory, posts }) => {
  const container = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const animation = gsap.from(container.current, { x: 5, opacity: 0 });

    return () => {
      animation.kill();
    };
  }, []);

  return (
    <div className={classes.container} ref={container}>
      <Categories changeActiveCategory={changeActiveCategory}></Categories>
      <RecentPost posts={posts}></RecentPost>
    </div>
  );
};

export default SideBar;
