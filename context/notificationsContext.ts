import { createContext } from 'react';

const postContext = createContext(
  {} as {
    type: string;
    updateNotification: (type: string) => void;
  }
);

export default postContext;
