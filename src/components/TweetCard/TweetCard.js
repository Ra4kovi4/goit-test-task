import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { updateUser } from '../../service';
import css from './TweetsCard.module.css';

export const TweetCard = ({
  id,
  tweets,
  followers,
  avatar,
  onFollowChange,
}) => {
  const [isFollow, setIsFollow] = useState(
    localStorage.getItem(`isFollow-${id}`) === 'true'
  );
  const [followersCount, setFollowersCount] = useState(followers);

  useEffect(() => {
    onFollowChange(id, isFollow);
  }, [id, onFollowChange, isFollow]);

  const handleClick = async () => {
    setIsFollow(prev => !prev);
    const updatedFollowers = followersCount + (isFollow ? -1 : 1);
    try {
      await updateUser(id, { followers: updatedFollowers });
    } catch (error) {
      toast.error('Oops, something went wrong! Please try again later', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }

    localStorage.setItem(`isFollow-${id}`, !isFollow);

    setFollowersCount(updatedFollowers);
  };

  return (
    <div className={css.card_item} key={id}>
      <div className={css.avatar_wrapper}>
        <img
          className={css.user_avatar}
          width={62}
          height={62}
          src={avatar}
          alt="avatar"
        />
      </div>
      <div className={css.info_wrapper}>
        <p className={css.tweets}>{tweets} Tweets</p>
        <p className={css.followers}>
          {followersCount.toLocaleString('en-US', { maximumFractionDigits: 0 })}
          Followers
        </p>
      </div>
      <button
        className={isFollow ? `${css.follow_button}` : `${css.unfollow_button}`}
        type="button"
        onClick={handleClick}
      >
        {isFollow ? 'Following' : 'Follow'}
      </button>
    </div>
  );
};

TweetCard.propTypes = {
  id: PropTypes.string.isRequired,
  tweets: PropTypes.number.isRequired,
  followers: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  onFollowChange: PropTypes.func,
};
