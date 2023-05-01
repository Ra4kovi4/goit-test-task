import css from './ScrollTopButton.module.css';

export const ScrollTopButton = ({ scrollToTop }) => {
  return (
    <div className={css.scroll_button_wrapper}>
      <button className={css.scroll_button} onClick={scrollToTop}>
        Scroll to top
      </button>
    </div>
  );
};
