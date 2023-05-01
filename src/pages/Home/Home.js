import css from './Home.module.css';

const Home = () => {
  return (
    <main className={css.home_container}>
      <div className={css.content_wrapper}></div>
      <h1 className={css.home_title}>Welcome to our Tweets app</h1>
    </main>
  );
};

export default Home;
