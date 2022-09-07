import classes from './PostPreview.module.scss';
import ReadMore from '../shared/ReadMore';
import post from '../../typescript/interface/post';
import { FC } from 'react';

interface Props {
  post: post;
}

const PostPreview: FC<Props> = ({ post }) => {
  const formattedDate = new Date(post.created).toLocaleString('en', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <div className={classes.container}>
      <div
        className={classes.img}
        style={{
          backgroundImage: `url(${post.img.preview})`,
        }}
      ></div>
      <h5>{formattedDate}</h5>
      <h3>{post.text.title.primary}</h3>
      <p>{post.text.paragraph.preview}</p>
      <ReadMore></ReadMore>
    </div>
  );
};

export default PostPreview;
