import classes from './Intro.module.scss';
import ReadMore from '../shared/ReadMore';

const Intro = () => {
  return (
    <div className={classes.container}>
      <h3>Fashion</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias rem porro
        nobis non qui tempore perferendis veniam odit laboriosam eius.
      </p>
      <ReadMore></ReadMore>
    </div>
  );
};

export default Intro;
