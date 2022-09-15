import { useContext, useState } from 'react';
import classes from './Featured.module.scss';
import postContext from '../../context/postsContext';
import Image from 'next/image';
import gsap from 'gsap';
import { useRef } from 'react';
import useLayoutEffect from '../../hooks/useIsomorphicLayoutEffect';

const Featured = () => {
  const container = useRef<HTMLDivElement>(null);
  const q = gsap.utils.selector(container);

  const posts = useContext(postContext).posts;
  const featuredPosts = posts.filter((post) => {
    if (post?.featured) return true;
  });

  const [index, setIndex] = useState(0);

  useLayoutEffect(() => {
    const timeline = gsap
      .timeline()
      .from(q('h2'), { y: 5, opacity: 0 })
      .from(q('p'), { y: 5, opacity: 0 }, '0');

    return () => {
      timeline.kill();
    };
  }, [index]);

  const handleNext = () => {
    if (index + 1 > featuredPosts.length - 1) {
      setIndex(0);
      return;
    }
    setIndex((prevState) => {
      return prevState + 1;
    });
  };

  const handlePrev = () => {
    if (index - 1 < 0) {
      setIndex(featuredPosts.length - 1);
      return;
    }
    setIndex((prevState) => {
      return prevState - 1;
    });
  };

  if (featuredPosts.length === 0) {
    return (
      <div
        className={classes.container}
        style={{
          background: `black`,
        }}
      >
        <button onClick={handleNext}>next</button>
        <button onClick={handlePrev}>prev</button>
        <h2>Logo</h2>
        <p>Blog site created for personal use only</p>
      </div>
    );
  }

  return (
    <div
      ref={container}
      className={classes.container}
      style={{
        backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),url(${featuredPosts[index].img.primary})`,
      }}
    >
      <button onClick={handleNext} className={classes.right}>
        <Image
          src="/images/icons/arrow-circle-right-solid.svg"
          width={20}
          height={20}
          alt="arrow right"
        ></Image>
      </button>
      <button onClick={handlePrev} className={classes.left}>
        <Image
          src="/images/icons/arrow-circle-left-solid.svg"
          width={20}
          height={20}
          alt="arrow left"
        ></Image>
      </button>
      <h2>{featuredPosts[index].text.title.primary}</h2>
      <p>{featuredPosts[index].text.paragraph.preview}</p>
    </div>
  );
};

export default Featured;
