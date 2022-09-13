import post from '../typescript/interface/post';
import { createContext } from 'react';
import category from '../typescript/interface/category';

const postContext = createContext(
  {} as {
    posts: post[];
    updatePosts: (newPosts: post[]) => void;
    category: category;
    updateCategory: (newCategory: category) => void;
  }
);

export default postContext;
