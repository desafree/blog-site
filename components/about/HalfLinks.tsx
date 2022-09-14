import classes from './HalfLinks.module.scss';

const HalfLinks = () => {
  return (
    <div className={classes.container}>
      <div className={classes.text}>
        <h2>Lorem ipsum dolor sit amet.</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni
          expedita assumenda officiis! Consequatur tempora maxime dignissimos
          veritatis in voluptatem maiores.
        </p>
      </div>
      <div className={classes.links}>
        <ul>
          <li>
            <a href="mailto:nicoladesanctis99@gmail.com">
              <img src="/images/icons/mail.svg" alt="mail icon" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/desafree"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/images/icons/github-icon.svg" alt="github icon" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/nicola-de-sanctis-8b094a1b3/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/images/icons/linkedin-icon.svg" alt="linkedin icon" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HalfLinks;
