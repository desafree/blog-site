import classes from './NavigationMobile.module.scss';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useRef } from 'react';
import useLayoutEffect from '../../hooks/useIsomorphicLayoutEffect';

const NavigationMobile = () => {
  const [menu, setMenu] = useState(false);
  const nav = useRef<HTMLElement>(null);
  const q = gsap.utils.selector(nav);

  useLayoutEffect(() => {
    const timeline = gsap
      .timeline()
      .from(nav.current, { x: 200 })
      .from(q('h5'), { x: -5, opacity: 0 })
      .from(q('li'), { x: -5, opacity: 0, stagger: 0.1 }, '<');

    return () => {
      timeline.kill();
    };
  }, [menu]);

  const handleClick = () => {
    setMenu((prevState) => !prevState);
  };

  return (
    <>
      <div className={classes.nav}>
        <Link href="/">
          <a>
            <h4>Logo</h4>
          </a>
        </Link>
        <button onClick={handleClick}>
          <Image
            src="/images/icons/menu.svg"
            width={20}
            height={20}
            alt="menu icon"
          ></Image>
        </button>
      </div>
      {menu && (
        <nav className={classes.container} ref={nav}>
          <button onClick={handleClick}>
            <Image
              src="/images/icons/close.svg"
              width={30}
              height={30}
              alt="close icon"
            ></Image>
          </button>
          <h5>Menu</h5>
          <ul className={classes.links}>
            <li onClick={handleClick}>
              <Link href="/All-Posts">All Posts</Link>
            </li>
            <li onClick={handleClick}>
              <Link href="/JavaScript/slug-prova1">Post Detail</Link>
            </li>
            <li onClick={handleClick}>
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
                  src="/images/icons/github-icon-white.svg"
                  width={30}
                  height={30}
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
                  width={30}
                  height={30}
                  src="/images/icons/linkedin-icon-white.svg"
                  alt="linkedin icon"
                ></Image>
              </a>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default NavigationMobile;
