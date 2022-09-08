import { FC, useState } from 'react';
import classes from './Categories.module.scss';

interface Props {
  changeActiveCategory: (newCategory: string) => void;
}

const Categories: FC<Props> = ({ changeActiveCategory }) => {
  const [active, setActive] = useState('All-Posts');
  const categories = ['All-Posts', 'HTML', 'CSS', 'JavaScript', 'React.js'];
  const handleClick = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    setActive(e.currentTarget.innerHTML);
    changeActiveCategory(e.currentTarget.innerHTML);
  };

  return (
    <ul className={classes.container}>
      {categories.map((category) => {
        return (
          <li
            key={category}
            className={category === active ? classes.active : ''}
            onClick={handleClick}
          >
            {category}
          </li>
        );
      })}
    </ul>
  );
};

export default Categories;
