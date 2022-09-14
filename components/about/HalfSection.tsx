import classes from './HalfSection.module.scss';

const HalfSection = () => {
  return (
    <div className={classes.container}>
      <div className={classes['img-container']}></div>
      <div className={classes.text}>
        <h4>Lorem, ipsum dolor.</h4>
        <h2>Lorem ipsum dolor sit amet.</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni
          expedita assumenda officiis! Consequatur tempora maxime dignissimos
          veritatis in voluptatem maiores.
        </p>
      </div>
    </div>
  );
};

export default HalfSection;
