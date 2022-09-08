import classes from './PostPreview.module.scss';
import ReadMore from '../shared/ReadMore';
import post from '../../typescript/interface/post';
import { FC } from 'react';
import formatDate from '../../utils/formatDate';

interface Props {
  post: post;
}

const PostPreview: FC<Props> = ({ post }) => {
  const formattedDate = formatDate(post.created, 'long');

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
      <ReadMore url={`/${post.category}/${post.slug}`}></ReadMore>
    </div>
  );
};

export default PostPreview;
