import { useContext } from 'react';
import notificationContext from '../../context/notificationsContext';
import classes from './Notification.module.scss';
import Image from 'next/image';

const Notification = () => {
  const notification = useContext(notificationContext).type;

  if (notification === 'error') {
    return (
      <div className={classes.container}>
        <div className={classes.img}>
          <Image
            width={20}
            height={20}
            src="/images/icons/notification-red.svg"
            alt="notification icon"
          ></Image>
        </div>
        <p>Something went wrong!</p>
      </div>
    );
  }

  return (
    <div className={classes.container}>
      <div className={classes.img}>
        <Image
          width={20}
          height={20}
          src="/images/icons/notification.svg"
          alt="notification icon"
        ></Image>
      </div>
      <p>{notification} added</p>
    </div>
  );
};

export default Notification;
