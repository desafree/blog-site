import classes from './PostDetail.module.scss';
import IntroPost from './IntroPost';
import PostBody from './PostBody';
import PostComments from './PostComments';
import CommentForm from './CommentForm';
import comment from '../../typescript/interface/comment';
import { FC, useState } from 'react';
import post from '../../typescript/interface/post';

interface Props {
  comments: comment[];
  post: post;
}

const PostDetail: FC<Props> = ({ post }) => {
  const [updateComponent, setUpdateComponent] = useState(0);

  const handleUpdate = () => {
    console.log('fired');
    setUpdateComponent((prevState) => {
      return prevState + 1;
    });
  };

  return (
    <div className={classes.container}>
      <IntroPost post={post}></IntroPost>
      <PostBody post={post}></PostBody>
      <PostComments updateComponent={updateComponent}></PostComments>
      <CommentForm handleUpdate={handleUpdate}></CommentForm>
    </div>
  );
};

export default PostDetail;
