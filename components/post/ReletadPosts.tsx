import classes from './RelatedPosts.module.scss';
import PostPreview from '../homepage/PostPreview';
import Link from 'next/link';
import post from '../../typescript/interface/post';
import { FC } from 'react';

interface Props {
  relatedPost: post[];
  postTime: { next: post; prev: post };
}

const ReletadPosts: FC<Props> = ({ relatedPost, postTime }) => {
  return (
    <div className={classes.container}>
      <h4>Reletad Post</h4>
      {relatedPost.map((post) => {
        return (
          <PostPreview key={post._id.toString()} post={post}></PostPreview>
        );
      })}
      <div className={classes.recent}>
        {postTime.prev && (
          <Link href={`/${postTime.prev.category}/${postTime.prev.slug}`}>
            <a>
              <img src="/images/icons/arrow-back.svg" alt="" /> prev post
            </a>
          </Link>
        )}
        {postTime.next && (
          <Link href={`/${postTime.next.category}/${postTime.next.slug}`}>
            <a>
              next post <img src="/images/icons/arrow-forward.svg" alt="" />
            </a>
          </Link>
        )}
      </div>
    </div>
  );
};

export default ReletadPosts;
