import classes from './Navigation.module.scss';
import Link from 'next/link';
import Image from 'next/image';

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
          <Link href="/All-Posts">All Posts</Link>
        </li>
        <li>
          <Link href="/JavaScript/slug-prova1">Post Detail</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
      <ul className={classes.socials}>
        <li>
          <a
            href="https://github.com/desafree"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/images/icons/github-icon.svg"
              width={25}
              height={25}
              alt="github icon"
            ></Image>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/nicola-de-sanctis-8b094a1b3/"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/images/icons/linkedin-icon.svg"
              width={25}
              height={25}
              alt="linkedin icon"
            ></Image>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
