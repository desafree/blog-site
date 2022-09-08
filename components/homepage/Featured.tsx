import { FC, useState } from 'react';
import post from '../../typescript/interface/post';
import classes from './Featured.module.scss';

interface Props {
  posts: post[];
}

const Featured: FC<Props> = ({ posts }) => {
  const featuredPosts = posts.filter((post) => {
    console.log(post);
    if (post?.featured) return true;
  });

  const [index, setIndex] = useState(0);

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
      className={classes.container}
      style={{
        backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),url(${featuredPosts[index].img.primary})`,
      }}
    >
      <button onClick={handleNext} className={classes.right}>
        <img src="/images/icons/arrow-circle-right-solid.svg" alt="" />
      </button>
      <button onClick={handlePrev} className={classes.left}>
        <img src="/images/icons/arrow-circle-left-solid.svg" alt="" />
      </button>
      <h2>{featuredPosts[index].text.title.primary + index}</h2>
      <p>{featuredPosts[index].text.paragraph.preview}</p>
    </div>
  );
};

export default Featured;
