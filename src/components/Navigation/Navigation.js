import { NavLink} from 'react-router-dom';

import css from './Navigation.module.css';

export const Navigation = () => {


  return (
    <nav>
      <ul className={css.nav_list}>
        <li className={css.nav_item}>
      <NavLink className={({ isActive })=> isActive? css.active:css.link} to="/">
        Home
      </NavLink></li>
      <li className={css.nav_item}>
        <NavLink className={({ isActive })=> isActive? css.active:css.link} to="/tweets">
          Tweets
        </NavLink></li></ul>
    </nav>
  );
};