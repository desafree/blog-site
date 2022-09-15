import classes from './Posts.module.scss';
import PostPreview from './PostPreview';
import { useContext } from 'react';
import postContext from '../../context/postsContext';
import gsap from 'gsap';
import { useRef } from 'react';
import useLayoutEffect from '../../hooks/useIsomorphicLayoutEffect';

const Posts = () => {
  const posts = useContext(postContext).posts;

  const container = useRef<HTMLDivElement>(null);
  const q = gsap.utils.selector(container);

  useLayoutEffect(() => {
    const animation = gsap.fromTo(
      q('div'),
      { x: -5, opacity: 0, stagger: 0.05 },
      { x: 0, opacity: 1, stagger: 0.05 }
    );

    return () => {
      animation.kill();
    };
  }, [posts]);

  return (
    <div className={classes.container} ref={container}>
      {posts.map((post) => {
        return (
          <PostPreview key={post._id.toString()} post={post}></PostPreview>
        );
      })}
    </div>
  );
};

export default Posts;
