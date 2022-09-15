import classes from './PostPreview.module.scss';
import Link from 'next/link';
import post from '../../typescript/interface/post';
import { FC } from 'react';
import formatDate from '../../utils/formatDate';
import Image from 'next/image';

interface Props {
  post: post;
}

const PostPreview: FC<Props> = ({ post }) => {
  const formattedDate = formatDate(post.created, 'long');

  return (
    <div className={classes.container}>
      <div
        className={classes.img}
        style={{
          backgroundImage: `url(${post.img.preview})`,
        }}
      ></div>
      <h5>{formattedDate}</h5>
      <h3>{post.text.title.primary}</h3>
      <p>{post.text.paragraph.preview}</p>
      <div className={classes.read}>
        <Link href={`/${post.category}/${post.slug}`}>
          <a>
            Read more{' '}
            <Image
              src="/images/icons/arrow-circle-right.svg"
              width={20}
              height={20}
              alt="arrow right"
            ></Image>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default PostPreview;
