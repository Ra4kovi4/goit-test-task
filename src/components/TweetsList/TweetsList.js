import React, { forwardRef } from 'react';

import PropTypes from 'prop-types';
import { TweetCard } from 'components/TweetCard';
import css from './TweetsList.module.css';

export const TweetsList = forwardRef(function TweetsList({ users }, ref) {
  const handleFollowChange = (id, isFollow) => {
    localStorage.setItem(`isFollow-${id}`, isFollow);
  };

  return (
    <ul className={css.tweets_list} ref={ref}>
      {users.map(({ id, tweets, followers, avatar }) => (
        <li className={css.tweets_item} key={id}>
          <TweetCard
            id={id}
            tweets={tweets}
            followers={followers}
            avatar={avatar}
            onFollowChange={handleFollowChange}
          />
        </li>
      ))}
    </ul>
  );
});

TweetsList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      user: PropTypes.string,
      tweets: PropTypes.number,
      followers: PropTypes.number,
      avatar: PropTypes.string,
    })
  ).isRequired,
};
