import classes from './Footer.module.scss';
import ReadMore from './ReadMore';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={classes.container}>
      <div className={classes.intro}>
        <Link href="/">
          <a>
            <h3>Logo</h3>
          </a>
        </Link>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          accusamus perspiciatis aliquid! Laudantium.
        </p>
        <ReadMore url="/All-Posts"></ReadMore>
      </div>
      <div className={classes.links}>
        <h3>Links</h3>
        <ul>
          <li>
            <Link href="/">Home page</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/All-Posts">All Post</Link>
          </li>
          <li>
            <Link href="/JavaScript/slug-prova1">Post detail</Link>
          </li>
        </ul>
      </div>
      <div className={classes.socials}>
        <h3>Socials</h3>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/nicola-de-sanctis-8b094a1b3/"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin
            </a>
          </li>
          <li>
            <a href="mailto:nicoladesanctis99@gmail.com">Email</a>
          </li>
          <li>
            <a
              href="https://github.com/desafree"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
