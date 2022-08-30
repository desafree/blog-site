import classes from './Categories.module.scss';

const Categories = () => {
  return (
    <ul className={classes.container}>
      <li className={classes.active}>All posts</li>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
    </ul>
  );
};

export default Categories;
