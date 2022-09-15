import classes from './PostDetail.module.scss';
import IntroPost from './IntroPost';
import PostBody from './PostBody';
import PostComments from './PostComments';
import CommentForm from './CommentForm';
import { FC } from 'react';
import post from '../../typescript/interface/post';
import gsap from 'gsap';
import { useRef } from 'react';
import useLayoutEffect from '../../hooks/useIsomorphicLayoutEffect';

interface Props {
  post: post;
}

const PostDetail: FC<Props> = ({ post }) => {
  const container = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const animation = gsap.fromTo(
      container.current,
      { x: -5, opacity: 0 },
      { x: 0, opacity: 1 }
    );

    return () => {
      animation.kill();
    };
  }, []);

  return (
    <div className={classes.container} ref={container}>
      <IntroPost post={post}></IntroPost>
      <PostBody post={post}></PostBody>
      <PostComments></PostComments>
      <CommentForm></CommentForm>
    </div>
  );
};

export default PostDetail;
