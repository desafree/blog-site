import classes from './Post.module.scss';
import PostDetail from './PostDetail';
import RelatedPosts from './ReletadPosts';
import comment from '../../typescript/interface/comment';
import { FC } from 'react';

interface Props {
  comments: comment[];
}

const Post: FC<Props> = ({ comments }) => {
  return (
    <div className={classes.container}>
      <PostDetail comments={comments}></PostDetail>
      <RelatedPosts></RelatedPosts>
    </div>
  );
};

export default Post;
