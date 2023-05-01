import css from './NotFound.module.css';

export const NotFound = () => {
  return (
    <div className={css.info_wrapper}>
      <h2>Unfortunately, we were unable to find data for your query</h2>
      <img
        src="https://i.postimg.cc/fTcTLXHf/sorry-note-rex.png"
        alt="apologies"
      />
    </div>
  );
};
