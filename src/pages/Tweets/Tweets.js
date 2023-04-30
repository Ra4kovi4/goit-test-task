import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchUsers, getFilteredUsers } from 'service';
import { TweetsList } from 'components/TweetsList';
import { Loader } from '../../components/Loader';
import { LoadButton } from 'components/LoadButton';
import { BackButton } from 'components/BackButton';
import { Dropdown } from 'components/Dropdown';
import { NotFound } from 'components/NotFound';
import css from './Tweets.module.css';

const Tweets = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [selectedButton, setSelectedButton] = useState('show all');


  useEffect(() => {
    const getUsers = async () => {
      try {
        setIsLoading(true);
        const result = await fetchUsers(page);
        if (page === 1) {
          setUsers(result);
        } else {
          setUsers(prevUsers => [...prevUsers, ...result]);
        }
      } catch (error) {
        toast.error('Oops, something went wrong! Please try again later', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      } finally {
        setIsLoading(false);
      }
     
    };
    getUsers();
  }, [page]);

  const filteredUsersList = getFilteredUsers(users, selectedButton);

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <div className={css.container}>
      <div className={css.dropdown_wrapper}>
        <BackButton />
        <Dropdown
          setSelectedButton={setSelectedButton}
          selectedButton={selectedButton}
        />
      </div>
      {filteredUsersList.length === 0 && <NotFound />}
      <TweetsList users={filteredUsersList} />
      {isLoading && <Loader />}
      {filteredUsersList?.length > 0 && filteredUsersList.length < 12 && (
        <LoadButton onClick={handleLoadMore} />
      )}
      <ToastContainer/>
    </div>
  );
};

export default Tweets;
