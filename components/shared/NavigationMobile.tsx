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
        <h4>Newspapper.</h4>
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
                  <img
                    src="/images/icons/github-icon-white.svg"
                    alt="github icon"
                  />
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>
                  <img
                    src="/images/icons/linkedin-icon-white.svg"
                    alt="linkedin icon"
                  />
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default NavigationMobile;
