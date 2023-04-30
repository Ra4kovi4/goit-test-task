import { Navigation } from '../Navigation';

import css from './NavBar.module.css';

export const NavBar = () => {
  return (
    <header className={css.header}>
      <Navigation />
    </header>
  );
};
