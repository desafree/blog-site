/* eslint-disable react-hooks/rules-of-hooks */
import { FC, useEffect, useState } from 'react';
import notificationsContext from './notificationsContext';

interface Props {
  children: React.ReactNode;
}

const NotificationsContextProvider: FC<Props> = ({ children }) => {
  const [notification, setNotification] = useState('');

  const updateNotification = (type: string): void => {
    setNotification(type);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setNotification('');
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [notification]);

  return (
    <notificationsContext.Provider
      value={{ type: notification, updateNotification }}
    >
      {children}
    </notificationsContext.Provider>
  );
};

export default NotificationsContextProvider;
