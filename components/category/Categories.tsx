import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import classes from '../homepage/Categories.module.scss';

const Categories = () => {
  const router = useRouter();
  const [active, setActive] = useState(router.query.category);
  const categories = ['All-Posts', 'HTML', 'CSS', 'JavaScript', 'React.js'];

  useEffect(() => {
    setActive(router.query.category);
  }, [router.query.category]);

  return (
    <ul className={classes.container}>
      {categories.map((category) => {
        return (
          <Link href={`/${category}`} key={category}>
            <a>
              <li className={category === active ? classes.active : ''}>
                {category}
              </li>
            </a>
          </Link>
        );
      })}
    </ul>
  );
};

export default Categories;
