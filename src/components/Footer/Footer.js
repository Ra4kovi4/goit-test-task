import css from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={css.footer_wrapper}>
      <div className={css.footer_container}>
        <p className={css.footer_info}>Copyright © created by </p>
        <a className={css.footer_link} href="https://github.com/Ra4kovi4">
          Kristina Rachkovych
        </a>
        <span className={css.footer_span}>{new Date().getFullYear()}</span>
      </div>
    </footer>
  );
};
