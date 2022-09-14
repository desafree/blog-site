import classes from './RecentPost.module.scss';
import PostPreview from './PostPreview';
import post from '../../typescript/interface/post';
import { FC } from 'react';
interface Props {
  posts: post[];
}

const RecentPost: FC<Props> = ({ posts }) => {
  const [firstPost, secondPost] = posts;

  return (
    <div className={classes.container}>
      <h4>Recent Post</h4>

      <PostPreview
        key={firstPost._id.toString()}
        post={firstPost}
      ></PostPreview>
      <PostPreview
        key={secondPost._id.toString()}
        post={secondPost}
      ></PostPreview>
    </div>
  );
};

export default RecentPost;
