import classes from './IntroPost.module.scss';

const IntroPost = () => {
  return (
    <div className={classes.container}>
      <h5>11 December 2021</h5>
      <h2>Photo Model</h2>
      <div className={classes.img}></div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa laborum,
        sunt debitis veniam ratione, aliquid labore cumque dolorum dicta quidem
        sit accusamus, placeat eveniet sequi consequatur provident magnam!
        Incidunt, asperiores.
      </p>
    </div>
  );
};

export default IntroPost;
