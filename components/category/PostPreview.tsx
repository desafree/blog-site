import classes from './PostPreview.module.scss';
import ReadMore from '../shared/ReadMore';

const PostPreview = () => {
  return (
    <div className={classes.container}>
      <div className={classes.img}></div>
      <h5>11 December 2021</h5>
      <h3>Photo model</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ea
        necessitatibus itaque consequuntur dicta dignissimos libero modi quod
        vero nisi.
      </p>
      <ReadMore></ReadMore>
    </div>
  );
};

export default PostPreview;
