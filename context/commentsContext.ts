import comment from '../typescript/interface/comment';
import { createContext } from 'react';

const commentContext = createContext(
  {} as {
    comments: comment[];
    updateComments: () => void;
  }
);

export default commentContext;
