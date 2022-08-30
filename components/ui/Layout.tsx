import { FC } from 'react';
import classes from './Layout.module.scss';

interface Props {
  children: React.ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return <main className={classes.container}>{children}</main>;
};

export default Layout;
