import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import { updateUser } from 'service/updateUser';
import css from"./TweetsCard.module.css";



export const TweetCard=({id,tweets,followers,avatar})=>{
const [isFollow, setIsFollow] = useState(false);
const [followersCount, setFollowersCount] = useState(followers);


useEffect(()=>{
    const isFollowStorage = localStorage.getItem(`isFollow-${id}`);
    if (isFollowStorage) {
      setIsFollow(isFollowStorage === "true");
    }
},[id])

const handleClick= async ()=>{
    setIsFollow((prev) => !prev);
    const updatedFollowers = followersCount + (isFollow ? -1 : 1);

     await updateUser(id, {followers:updatedFollowers} );
    localStorage.setItem(`isFollow-${id}`, !isFollow);
  
    setFollowersCount(updatedFollowers);
}


return (
    <div className={css.card_item} key={id}>
      <div className={css.avatar_wrapper}>
        <img className={css.user_avatar} width={62} height={62} src={avatar} alt="avatar" />
      </div>
      <div className={css.info_wrapper}>
        <p className={css.tweets}>{tweets} Tweets</p>
        <p className={css.followers}>
          {followersCount.toLocaleString('en-US', {maximumFractionDigits: 0})} Followers
        </p>
      </div>
      <button className={isFollow?`${css.follow_button}`:`${css.unfollow_button}`} type="button" onClick={handleClick}>
      {isFollow?'Following':"Follow"}
      </button>
    </div>
  );
}


TweetCard.propTypes={
    id:PropTypes.string.isRequired,
    tweets:PropTypes.number.isRequired,
    followers:PropTypes.number.isRequired,
    avatar:PropTypes.string.isRequired

}