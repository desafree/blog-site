import classes from './Post.module.scss';
import PostDetail from './PostDetail';
import RelatedPosts from './ReletadPosts';
import comment from '../../typescript/interface/comment';
import { FC } from 'react';
import post from '../../typescript/interface/post';

interface Props {
  post: post;
  relatedPost: post[];
}

const Post: FC<Props> = ({ post, relatedPost }) => {
  return (
    <div className={classes.container}>
      <PostDetail post={post}></PostDetail>
      <RelatedPosts relatedPost={relatedPost}></RelatedPosts>
    </div>
  );
};

export default Post;
