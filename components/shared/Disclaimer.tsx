import classes from './Disclaimer.module.scss';

const Disclaimer = () => {
  return (
    <div className={classes.container}>
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
