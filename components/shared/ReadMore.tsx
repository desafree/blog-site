import Link from 'next/link';
import { FC } from 'react';
import classes from './ReadMore.module.scss';

interface Props {
  url: string;
}

const ReadMore: FC<Props> = ({ url }) => {
  return (
    <Link href={url}>
      <a className={classes.container}>
        Read more{' '}
        <img src="/images/icons/arrow-circle-right-footer.svg" alt="" />
      </a>
    </Link>
  );
};

export default ReadMore;
