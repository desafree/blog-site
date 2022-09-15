import React, { useContext, useRef } from 'react';
import classes from './Newsletter.module.scss';
import notificationContext from '../../context/notificationsContext';

const Newsletter = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const sendNotification = useContext(notificationContext).updateNotification;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form !== null) {
      const email = form.current?.email.value;
      const commentObj = { email };
      fetch('/api/newsletter', {
        method: 'POST',
        body: JSON.stringify(commentObj),
        headers: { 'Content-Type': 'application/json' },
      })
        .then(() => {
          form.current?.reset();
          sendNotification('email');
        })
        .catch(() => {
          sendNotification('error');
        });
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.text}>
        <h4>Newsletter</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure eveniet
          explicabo libero officiis molestiae necessitatibus quaerat autem
          facere sequi doloribus?
        </p>
      </div>
      <form ref={form} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" required />
        </div>
        <button>Subscribe</button>
      </form>
    </div>
  );
};

export default Newsletter;
