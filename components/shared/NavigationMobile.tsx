import classes from './NavigationMobile.module.scss';
import Link from 'next/link';
import { useState } from 'react';

const NavigationMobile = () => {
  const [menu, setMenu] = useState(false);
  const handleClick = () => {
    setMenu((prevState) => !prevState);
  };

  return (
    <>
      <div className={classes.nav}>
        <Link href="/">
          <a>
            <h4>Newspapper.</h4>
          </a>
        </Link>
        <button onClick={handleClick}>
          <img src="/images/icons/menu.svg" alt="" />
        </button>
      </div>
      {menu && (
        <nav className={classes.container}>
          <button onClick={handleClick}>
            <img src="/images/icons/close.svg" alt="" />
          </button>
          <h5>Menu</h5>
          <ul className={classes.links}>
            <li>
              <Link href="/All-Posts">All Posts</Link>
            </li>
            <li>
              <Link href="/JavaScript/slug-prova">Post Detail</Link>
            </li>
            <li>
              <Link href="/">About us</Link>
            </li>
          </ul>
          <ul className={classes.socials}>
            <li>
              <a
                href="https://github.com/desafree"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/images/icons/github-icon-white.svg"
                  alt="github icon"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/nicola-de-sanctis-8b094a1b3/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/images/icons/linkedin-icon-white.svg"
                  alt="linkedin icon"
                />
              </a>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default NavigationMobile;
