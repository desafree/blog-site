import classes from './HalfSection.module.scss';
import gsap from 'gsap';
import { useRef } from 'react';
import useLayoutEffect from '../../hooks/useIsomorphicLayoutEffect';

const HalfSection = () => {
  const container = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const animation = gsap.fromTo(
      container.current,
      { x: -20, opacity: 0 },
      { x: 0, opacity: 1 }
    );

    return () => {
      animation.kill();
    };
  }, []);

  return (
    <div className={classes.container} ref={container}>
      <div className={classes['img-container']}></div>
      <div className={classes.text}>
        <h4>Lorem, ipsum dolor.</h4>
        <h2>Lorem ipsum dolor sit amet.</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni
          expedita assumenda officiis! Consequatur tempora maxime dignissimos
          veritatis in voluptatem maiores.
        </p>
      </div>
    </div>
  );
};

export default HalfSection;
