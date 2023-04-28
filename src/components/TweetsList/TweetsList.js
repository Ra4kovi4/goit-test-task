import React from 'react';
import PropTypes from 'prop-types';
import { TweetCard } from "components/TweetCard/TweetCard";
import css from"./TweetsList.module.css"


export const TweetsList=React.memo(({users})=>{


return(

 
    <ul className={css.tweets_list}>   {users.map(({id,tweets,user,followers,avatar})=>(<li className={css.tweets_item} key={id}><TweetCard id={id} tweets={tweets}followers={followers} avatar={avatar}/></li>))}</ul>
 
)
})

TweetsList.propTypes={
    users: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string,
       user:PropTypes.string,
          tweets:PropTypes.number,
          followers:PropTypes.number,
          avatar:PropTypes.string
        })).isRequired
}
