import classes from './RelatedPosts.module.scss';
import PostPreview from '../homepage/PostPreview';
import Link from 'next/link';

const ReletadPosts = () => {
  return (
    <div className={classes.container}>
      <h4>Reletad Post</h4>
      <PostPreview></PostPreview>
      <PostPreview></PostPreview>
      <div className={classes.recent}>
        <Link href="/">
          <a>
            <img src="/images/icons/arrow-back.svg" alt="" /> prev post
          </a>
        </Link>
        <Link href="/">
          <a>
            next post <img src="/images/icons/arrow-forward.svg" alt="" />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ReletadPosts;
