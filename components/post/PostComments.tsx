import classes from './PostComments.module.scss';
import Comment from './Comment';
import comment from '../../typescript/interface/comment';
import { FC } from 'react';

interface Props {
  comments: comment[];
}

const PostComments: FC<Props> = ({ comments }) => {
  return (
    <div className={classes.container}>
      <h4>Comments</h4>
      {comments.map((comment) => {
        return <Comment key={comment.comment} comment={comment} />;
      })}
      {comments.length === 0 && <p>No comments...</p>}
    </div>
  );
};

export default PostComments;
