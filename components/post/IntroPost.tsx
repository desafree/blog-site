import { FC } from 'react';
import post from '../../typescript/interface/post';
import formatDate from '../../utils/formatDate';
import classes from './IntroPost.module.scss';

interface Props {
  post: post;
}

const IntroPost: FC<Props> = ({ post }) => {
  const formattedDate = formatDate(post.created, 'long');

  return (
    <div className={classes.container}>
      <h5>{formattedDate}</h5>
      <h2>{post.text.title.primary}</h2>
      <div
        className={classes.img}
        style={{
          backgroundImage: `url(${post.img.primary})`,
        }}
      ></div>
      <p>{post.text.paragraph.preview}</p>
    </div>
  );
};

export default IntroPost;
