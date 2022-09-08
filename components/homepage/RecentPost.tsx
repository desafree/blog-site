import classes from './RecentPost.module.scss';
import PostPreview from './PostPreview';
import post from '../../typescript/interface/post';
import { FC } from 'react';
interface Props {
  posts: post[];
}

const RecentPost: FC<Props> = ({ posts }) => {
  const [firstPost, secondPost] = posts.sort((post1, post2) => {
    if (post1.created < post2.created) return -1;
    else return 1;
  });

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
