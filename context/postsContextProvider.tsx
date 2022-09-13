import { FC, useState } from 'react';
import postContext from './postsContext';
import post from '../typescript/interface/post';
import category from '../typescript/interface/category';

interface Props {
  children: React.ReactNode;
}

const PostsContextProvider: FC<Props> = ({ children }) => {
  const [posts, setPosts] = useState([] as post[]);
  const [category, setCategory] = useState({} as category);

  const updatePosts = (newPosts: post[]): void => {
    setPosts(newPosts);
  };

  const updateCategory = (newCategory: category): void => {
    setCategory(newCategory);
  };

  return (
    <postContext.Provider
      value={{ posts, updatePosts, category, updateCategory }}
    >
      {children}
    </postContext.Provider>
  );
};

export default PostsContextProvider;
