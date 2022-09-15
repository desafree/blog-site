import classes from './Sidebar.module.scss';
import Intro from './Intro';
import Categories from './Categories';
import gsap from 'gsap';
import { useRef } from 'react';
import useLayoutEffect from '../../hooks/useIsomorphicLayoutEffect';

const Sidebar = () => {
  const container = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const animation = gsap.fromTo(
      container.current,
      { x: -5, opacity: 0 },
      { x: 0, opacity: 1 }
    );

    return () => {
      animation.kill();
    };
  }, []);

  return (
    <div className={classes.container} ref={container}>
      <Intro></Intro>
      <Categories></Categories>
    </div>
  );
};

export default Sidebar;
