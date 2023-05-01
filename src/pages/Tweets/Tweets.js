import { useState, useEffect, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchUsers } from 'service';
import { getFilteredUsers, getVisibleUsers } from '../../utils';
import { TweetsList } from 'components/TweetsList';
import { Loader } from '../../components/Loader';
import { LoadButton } from 'components/LoadButton';
import { Dropdown } from 'components/Dropdown';
import { NotFound } from 'components/NotFound';
import { ScrollTopButton } from 'components/ScrollTopButton';
import css from './Tweets.module.css';

const Tweets = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [selectedButton, setSelectedButton] = useState('show all');
  const [showScrollButton, setShowScrollButton] = useState(false);
  const listRef = useRef(null);

  useEffect(() => {
    setIsLoading(true);
    const getUsers = async () => {
      try {
        const result = await fetchUsers();
        setUsers(result);
      } catch (error) {
        toast.error('Oops, something went wrong! Please try again later', {
          position: 'top-right',
          autoClose: 2000,
        });
      } finally {
        setIsLoading(false);
      }
    };
    getUsers();
  }, [selectedButton]);

  const filteredUsersList = getFilteredUsers(users, selectedButton);
  const visibleList = getVisibleUsers(filteredUsersList, page);

  const handleLoadMore = async () => {
    setIsLoading(true);
    setPage(prevPage => prevPage + 1);
    setIsLoading(false);
  };

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [visibleList]);
  const showMore =
    visibleList.length >= 3 &&
    filteredUsersList.length - visibleList.length > 0;

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const isShow = window.scrollY > 100;
      setShowScrollButton(isShow);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className={css.container}>
      <div className={css.dropdown_wrapper}>
        <Dropdown
          setSelectedButton={setSelectedButton}
          selectedButton={selectedButton}
        />
      </div>

      {isLoading ? (
        <Loader />
      ) : (
        <>
          {!isLoading && visibleList.length === 0 && <NotFound />}
          <TweetsList users={visibleList} ref={listRef} />
          <div ref={listRef}></div>
          {showMore && <LoadButton onClick={handleLoadMore} />}
        </>
      )}
      {showScrollButton && <ScrollTopButton scrollToTop={handleScrollToTop} />}
      <ToastContainer />
    </main>
  );
};

export default Tweets;
