import PropTypes from 'prop-types';
import css from './LoadButton.module.css'

export const LoadButton = ({ onClick }) => {
  return (
    <div className={css.button_container}>
    <button className={css.load_button} type="button" onClick={onClick}>
      Load more
    </button></div>
  );
};

LoadButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};