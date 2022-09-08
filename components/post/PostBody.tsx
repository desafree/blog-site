import { FC } from 'react';
import post from '../../typescript/interface/post';
import classes from './PostBody.module.scss';

interface Props {
  post: post;
}

const PostBody: FC<Props> = ({ post }) => {
  return (
    <div className={classes.container}>
      <h4>{post.text.title.primary}</h4>
      <p>{post.text.paragraph.first}</p>
      <div
        className={classes.img}
        style={{
          backgroundImage: `url(${post.img.secondary})`,
        }}
      ></div>
      <h5>{post.text.title.secondary}</h5>
      <p>{post.text.paragraph.second}</p>
    </div>
  );
};

export default PostBody;
