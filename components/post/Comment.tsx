import classes from './Comment.module.scss';
import comment from '../../typescript/interface/comment';
import { FC } from 'react';

interface Props {
  comment: comment;
}

const Comment: FC<Props> = ({ comment }) => {
  const formattedDate = new Date(comment.date).toLocaleString('en', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  return (
    <div className={classes.container}>
      <h5>{comment.username}</h5>
      <p>{comment.comment}</p>
      <h6>{formattedDate}</h6>
    </div>
  );
};

export default Comment;
