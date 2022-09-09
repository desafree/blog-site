import classes from './PostComments.module.scss';
import Comment from './Comment';
import { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import comment from '../../typescript/interface/comment';

interface Props {
  updateComponent: number;
}

const PostComments: FC<Props> = ({ updateComponent }) => {
  const [comments, setComments] = useState<comment[]>([]);
  const router = useRouter();
  const slug = router.query.slug;

  useEffect(() => {
    fetch(`/api/comment/${slug}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setComments(JSON.parse(data.comments));
      });
  }, [updateComponent, slug]);

  return (
    <div className={classes.container}>
      <h4>Comments</h4>
      {comments.map((comment) => {
        return <Comment key={comment._id.toString()} comment={comment} />;
      })}
      {comments.length === 0 && <p>No comments...</p>}
    </div>
  );
};

export default PostComments;
