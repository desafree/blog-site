import classes from './CommentForm.module.scss';

const CommentForm = () => {
  return (
    <form className={classes.container}>
      <h4>Post a comment</h4>
      <div className={classes.inputs}>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" />
        </div>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" />
        </div>
      </div>
      <div className={classes.comment}>
        <label htmlFor="comment">Comment</label>
        <textarea name="comment" id="comment"></textarea>
      </div>
      <div className={classes.button}>
        <button>Send</button>
      </div>
    </form>
  );
};

export default CommentForm;
