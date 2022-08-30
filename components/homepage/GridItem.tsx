import classes from './GridItem.module.scss';

const GridItem = () => {
  return (
    <div className={classes.container}>
      <div className={classes.info}>
        <h6>CSS</h6>
        <h5>August, 18</h5>
      </div>
      <h3>Animating Link Underlines</h3>
    </div>
  );
};

export default GridItem;
