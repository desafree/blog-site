import classes from './RelatedPosts.module.scss';
import PostPreview from '../homepage/PostPreview';
import Link from 'next/link';
import post from '../../typescript/interface/post';
import { FC } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useRef } from 'react';
import useLayoutEffect from '../../hooks/useIsomorphicLayoutEffect';

interface Props {
  relatedPost: post[];
  postTime: { next: post; prev: post };
}

const ReletadPosts: FC<Props> = ({ relatedPost, postTime }) => {
  const container = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const animation = gsap.fromTo(
      container.current,
      { x: 5, opacity: 0 },
      { x: 0, opacity: 1 }
    );

    return () => {
      animation.kill();
    };
  }, []);

  return (
    <div className={classes.container} ref={container}>
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
              <Image
                src="/images/icons/arrow-back.svg"
                width={15}
                height={15}
                alt="arrow back"
              ></Image>
              prev post
            </a>
          </Link>
        )}
        {postTime.next && (
          <Link href={`/${postTime.next.category}/${postTime.next.slug}`}>
            <a>
              next post{' '}
              <Image
                src="/images/icons/arrow-forward.svg"
                width={15}
                height={15}
                alt="arrow forward"
              ></Image>{' '}
            </a>
          </Link>
        )}
      </div>
    </div>
  );
};

export default ReletadPosts;
