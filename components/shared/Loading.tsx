import classes from './Loading.module.scss';
import Image from 'next/image';

const Loading = () => {
  return (
    <div className={classes.container}>
      <Image
        src="/images/icons/spinner.svg"
        width={20}
        height={20}
        alt="spinner"
      ></Image>
    </div>
  );
};

export default Loading;
