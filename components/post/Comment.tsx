import classes from './Comment.module.scss';

const Comment = () => {
  return (
    <div className={classes.container}>
      <h5>David Rasmus</h5>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam earum
        perferendis praesentium sunt. Tempora beatae libero qui ipsa, aspernatur
        quisquam.
      </p>
      <h6>11 December 2021</h6>
    </div>
  );
};

export default Comment;
