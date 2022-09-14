import { useContext } from 'react';
import notificationContext from '../../context/notificationsContext';
import classes from './Notification.module.scss';

const Notification = () => {
  const notification = useContext(notificationContext).type;
  return (
    <div className={classes.container}>
      <div className={classes.img}>
        <img src="/images/icons/notification.svg" alt="" />
      </div>
      <p>{notification} added</p>
    </div>
  );
};

export default Notification;
