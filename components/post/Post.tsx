import classes from './Post.module.scss';
import PostDetail from './PostDetail';
import RelatedPosts from './ReletadPosts';
import { FC } from 'react';
import post from '../../typescript/interface/post';

interface Props {
  post: post;
  relatedPost: post[];
  postTime: { next: post; prev: post };
}

const Post: FC<Props> = ({ post, relatedPost, postTime }) => {
  return (
    <div className={classes.container}>
      <PostDetail post={post}></PostDetail>
      <RelatedPosts
        relatedPost={relatedPost}
        postTime={postTime}
      ></RelatedPosts>
    </div>
  );
};

export default Post;
