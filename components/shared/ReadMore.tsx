import Link from 'next/link';
import classes from './ReadMore.module.scss';

const ReadMore = () => {
  return (
    <Link href="/">
      <a className={classes.container}>
        Read more{' '}
        <img src="/images/icons/arrow-circle-right-footer.svg" alt="" />
      </a>
    </Link>
  );
};

export default ReadMore;
