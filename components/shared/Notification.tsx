import { useContext } from 'react';
import notificationContext from '../../context/notificationsContext';
import classes from './Notification.module.scss';
import Image from 'next/image';
import gsap from 'gsap';
import { useRef } from 'react';
import useLayoutEffect from '../../hooks/useIsomorphicLayoutEffect';

const Notification = () => {
  const notification = useContext(notificationContext).type;
  const container = useRef<HTMLDivElement>(null);
  const containerAlert = useRef<HTMLDivElement>(null);
  const containerText = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const timeline = gsap
      .timeline()
      .fromTo(container.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1 })
      .fromTo(
        containerText.current,
        { width: 0, padding: 0 },
        { width: 150, padding: '10px 20px' }
      )
      .fromTo(containerText.current, { opacity: 0 }, { opacity: 1 });

    return () => {
      timeline.kill();
    };
  }, [notification]);

  if (notification === 'error') {
    return (
      <div className={classes.container} ref={container}>
        <div className={classes.img} ref={containerAlert}>
          <Image
            width={20}
            height={20}
            src="/images/icons/notification-red.svg"
            alt="notification icon"
          ></Image>
        </div>
        <p ref={containerText}>Something went wrong!</p>
      </div>
    );
  }

  return (
    <div className={classes.container} ref={container}>
      <div className={classes.img} ref={containerAlert}>
        <Image
          width={20}
          height={20}
          src="/images/icons/notification.svg"
          alt="notification icon"
        ></Image>
      </div>
      <p ref={containerText}>{notification} added</p>
    </div>
  );
};

export default Notification;
