import { useRouter } from 'next/router';
import React, { FC, useRef } from 'react';
import classes from './CommentForm.module.scss';

interface Props {
  handleUpdate: () => void;
}

const CommentForm: FC<Props> = ({ handleUpdate }) => {
  const form = useRef<null | HTMLFormElement>(null);
  const router = useRouter();
  const slug = router.query.slug;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form !== null) {
      const email = form.current?.email.value;
      const username = form.current?.username.value;
      const comment = form.current?.comment.value;
      const postSlug = slug;
      const date = new Date();
      const commentObj = { email, username, comment, postSlug, date };
      fetch('/api/comment', {
        method: 'POST',
        body: JSON.stringify(commentObj),
        headers: { 'Content-Type': 'application/json' },
      }).then(() => {
        handleUpdate();
        form.current?.reset();
      });
    }
  };

  return (
    <form className={classes.container} ref={form} onSubmit={handleSubmit}>
      <h4>Post a comment</h4>
      <div className={classes.inputs}>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required />
        </div>
      </div>
      <div className={classes.comment}>
        <label htmlFor="comment">Comment</label>
        <textarea name="comment" id="comment" required></textarea>
      </div>
      <div className={classes.button}>
        <button>Send</button>
      </div>
    </form>
  );
};

export default CommentForm;
