import classes from './Loading.module.scss';

const Loading = () => {
  return (
    <div className={classes.container}>
      <img src="/images/icons/spinner.svg" alt="" />
    </div>
  );
};

export default Loading;
