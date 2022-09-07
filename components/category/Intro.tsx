import classes from './Intro.module.scss';
import ReadMore from '../shared/ReadMore';
import category from '../../typescript/interface/category';
import { FC } from 'react';

interface Props {
  category: category;
}

const Intro: FC<Props> = ({ category }) => {
  const title = category.name.split('-').join(' ');

  return (
    <div className={classes.container}>
      <h3>{title}</h3>
      <p>{category.description}</p>
      <ReadMore></ReadMore>
    </div>
  );
};

export default Intro;
