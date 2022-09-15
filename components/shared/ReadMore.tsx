import Link from 'next/link';
import { FC } from 'react';
import classes from './ReadMore.module.scss';
import Image from 'next/image';

interface Props {
  url: string;
}

const ReadMore: FC<Props> = ({ url }) => {
  return (
    <Link href={url}>
      <a className={classes.container}>
        Read more{' '}
        <Image
          width={20}
          height={20}
          src="/images/icons/arrow-circle-right-footer.svg"
          alt="read more icon"
        ></Image>
      </a>
    </Link>
  );
};

export default ReadMore;
