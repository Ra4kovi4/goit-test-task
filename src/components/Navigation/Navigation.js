import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import css from './Navigation.module.css';
import { BackButton } from 'components/BackButton';

export const Navigation = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  return (
    <nav>
      <ul className={css.nav_list}>
        {isHome ? (
          <>
            <li className={css.nav_item}>
              <NavLink
                className={({ isActive }) => (isActive ? css.active : css.link)}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className={css.nav_item}>
              <NavLink
                className={({ isActive }) => (isActive ? css.active : css.link)}
                to="/tweets"
              >
                Tweets
              </NavLink>
            </li>
          </>
        ) : (
          <li className={css.nav_item}>
            <BackButton />

            <NavLink
              className={({ isActive }) => (isActive ? css.active : css.link)}
              to="/tweets"
            >
              Tweets
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};
