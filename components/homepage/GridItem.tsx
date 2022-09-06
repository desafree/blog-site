import classes from './GridItem.module.scss';
import post from '../../typescript/interface/post';
import { FC } from 'react';

interface Props {
  post: post;
}

const GridItem: FC<Props> = ({ post }) => {
  const formattedDate = new Date(post.created).toLocaleString('en', {
    day: 'numeric',
    month: 'short',
  });

  console.log(typeof formattedDate);

  return (
    <div className={classes.container}>
      <div className={classes.info}>
        <h6>{post.category}</h6>
        <h5>{formattedDate}</h5>
      </div>
      <h3>{post.text.title.primary}</h3>
    </div>
  );
};

export default GridItem;
