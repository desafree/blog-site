import classes from './GridPost.module.scss';
import GridItem from './GridItem';
import post from '../../typescript/interface/post';
import { FC } from 'react';
import gsap from 'gsap';
import { useRef } from 'react';
import useLayoutEffect from '../../hooks/useIsomorphicLayoutEffect';

interface Props {
  posts: post[];
}

const GridPosts: FC<Props> = ({ posts }) => {
  const container = useRef<HTMLDivElement>(null);
  const q = gsap.utils.selector(container);

  useLayoutEffect(() => {
    const animation = gsap.fromTo(
      q('a'),
      { y: 5, opacity: 0, stagger: 0.05 },
      { y: 0, opacity: 1, stagger: 0.05 }
    );

    return () => {
      animation.kill();
    };
  }, []);

  return (
    <div className={classes.container} ref={container}>
      {posts.map((post) => {
        return <GridItem key={post._id.toString()} post={post}></GridItem>;
      })}
    </div>
  );
};

export default GridPosts;
