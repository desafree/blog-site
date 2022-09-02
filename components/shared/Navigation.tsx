import classes from './Navigation.module.scss';
import Link from 'next/link';

const Navigation = () => {
  return (
    <nav className={classes.container}>
      <Link href="/">
        <a className={classes.logo}>
          <h3>Logo</h3>
        </a>
      </Link>
      <ul className={classes.links}>
        <li>
          <Link href="/fashion">Category</Link>
        </li>
        <li>
          <Link href="/fashion/shoes">Post Detail</Link>
        </li>
        <li>
          <Link href="/">About us</Link>
        </li>
        <li>
          <Link href="/">Blog</Link>
        </li>
      </ul>
      <ul className={classes.socials}>
        <li>
          <Link href="/">
            <a>
              <img src="/images/icons/github-icon.svg" alt="github icon" />
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>
              <img src="/images/icons/linkedin-icon.svg" alt="linkedin icon" />
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
