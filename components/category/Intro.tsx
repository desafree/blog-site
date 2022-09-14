import classes from './Intro.module.scss';
import { useContext } from 'react';
import postContext from '../../context/postsContext';

const Intro = () => {
  const category = useContext(postContext).category;
  const title = category.name.split('-').join(' ');

  return (
    <div className={classes.container}>
      <h3>{title}</h3>
      <p>{category.description}</p>
    </div>
  );
};

export default Intro;
