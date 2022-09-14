import classes from './GridItem.module.scss';
import post from '../../typescript/interface/post';
import { FC } from 'react';
import Link from 'next/link';
import formatDate from '../../utils/formatDate';
import { type } from 'os';
interface Props {
  post: post;
}

const GridItem: FC<Props> = ({ post }) => {
  const formattedDate = formatDate(post.created, 'short');

  return (
    <Link href={`/${post.category}/${post.slug}`}>
      <a className={classes.container}>
        <div className={classes.info}>
          <h6 className={classes[post.category.split('.')[0]]}>
            {post.category}
          </h6>
          <h5>{formattedDate}</h5>
        </div>
        <h3>{post.text.title.primary}</h3>
      </a>
    </Link>
  );
};

export default GridItem;
