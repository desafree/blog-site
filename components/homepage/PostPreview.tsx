import classes from './PostPreview.module.scss';
import Link from 'next/link';

const PostPreview = () => {
  return (
    <div className={classes.container}>
      <div className={classes.img}></div>
      <h5>11 December 2021</h5>
      <h3>Photo model</h3>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis,
        accusamus provident magni corporis velit id repellat fuga modi placeat
        quibusdam?
      </p>
      <div className={classes.read}>
        <Link href="/">
          <a>
            Read more <img src="/images/icons/arrow-circle-right.svg" alt="" />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default PostPreview;
