import { NavLink } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import css from './BackButton.module.css';

export const BackButton = () => {
  return (
    <div className={css.button_container}>
      <NavLink className={css.back_link} to="/">
        <BsArrowLeft />
        Back Home
      </NavLink>
    </div>
  );
};
