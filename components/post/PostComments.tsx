import classes from './PostComments.module.scss';
import Comment from './Comment';
import { useContext } from 'react';
import commentContext from '../../context/commentsContext';

const PostComments = () => {
  const comments = useContext(commentContext).comments;

  return (
    <div className={classes.container}>
      <h4>Comments</h4>
      {comments.map((comment) => {
        return <Comment key={comment._id.toString()} comment={comment} />;
      })}
      {comments.length === 0 && <p>No comments...</p>}
    </div>
  );
};

export default PostComments;
