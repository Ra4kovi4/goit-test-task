import PropTypes from 'prop-types';
import css from './Dropdown.module.css';

export const Dropdown = ({ setSelectedButton, selectedButton }) => {
  const handleClick = e => {
    setSelectedButton(e.target.value);
  };

  return (
    <div className={css.wrapper}>
      <button
        value="show all"
        className={
          selectedButton === 'show all' ? `${css.btn_select}` : `${css.btn}`
        }
        onClick={handleClick}
      >
        Show all
      </button>
      <button
        className={
          selectedButton === 'follow' ? `${css.btn_select}` : `${css.btn}`
        }
        value="follow"
        onClick={handleClick}
      >
        Follow
      </button>
      <button
        className={
          selectedButton === 'followings' ? `${css.btn_select}` : `${css.btn}`
        }
        value="followings"
        onClick={handleClick}
      >
        Followings
      </button>
    </div>
  );
};

Dropdown.propTypes = {
  selectedButton: PropTypes.string,
  setSelectedButton: PropTypes.func,
};
