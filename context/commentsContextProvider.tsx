import { FC, useState } from 'react';
import commentContext from './commentsContext';
import comment from '../typescript/interface/comment';
import { useRouter } from 'next/router';

interface Props {
  children: React.ReactNode;
}

const CommentsContextProvider: FC<Props> = ({ children }) => {
  const [comments, setComments] = useState([] as comment[]);
  const router = useRouter();
  const slug = router.query.slug;

  const updateComments = (): void => {
    fetch(`/api/comment/${slug}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setComments(JSON.parse(data.comments));
      })
      .catch(() => {
        console.log('something went wrong');
      });
  };

  return (
    <commentContext.Provider value={{ comments, updateComments }}>
      {children}
    </commentContext.Provider>
  );
};

export default CommentsContextProvider;
