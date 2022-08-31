import classes from './Footer.module.scss';
import ReadMore from './ReadMore';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={classes.container}>
      <div className={classes.intro}>
        <h3>Newspaper.</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          accusamus perspiciatis aliquid! Laudantium.
        </p>
        <ReadMore></ReadMore>
      </div>
      <div className={classes.links}>
        <h3>Links</h3>
        <ul>
          <li>
            <Link href="/">Home page</Link>
          </li>
          <li>
            <Link href="/">About Us</Link>
          </li>
          <li>
            <Link href="/">Blog</Link>
          </li>
          <li>
            <Link href="/">Simple post</Link>
          </li>
        </ul>
      </div>
      <div className={classes.socials}>
        <h3>Socials</h3>
        <ul>
          <li>
            <a href="#">Linkedin</a>
          </li>
          <li>
            <a href="#">Email</a>
          </li>
          <li>
            <a href="#">GitHub</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
