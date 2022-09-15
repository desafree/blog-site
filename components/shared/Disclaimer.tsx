import classes from './Disclaimer.module.scss';
import gsap from 'gsap';
import { useRef } from 'react';
import useLayoutEffect from '../../hooks/useIsomorphicLayoutEffect';

const Disclaimer = () => {
  const container = useRef<HTMLDivElement>(null);
  const q = gsap.utils.selector(container);

  useLayoutEffect(() => {
    const timeline = gsap
      .timeline()
      .fromTo(q('h3'), { y: 5, opacity: 0 }, { y: 0, opacity: 1 })
      .fromTo(
        q('li'),
        { y: 5, opacity: 0, stagger: 0.1 },
        { y: 0, opacity: 1, stagger: 0.1 },
        '0'
      );

    return () => {
      timeline.kill();
    };
  }, []);

  return (
    <div className={classes.container} ref={container}>
      <h3>Personal Project of Nicola De Sanctis</h3>
      <ul>
        <li>
          <a
            href="https://github.com/desafree"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </li>
        <li>
          <a href="mailto:nicoladesanctis99@gmail.com">Email</a>
        </li>
      </ul>
    </div>
  );
};

export default Disclaimer;
