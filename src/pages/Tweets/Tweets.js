
import { useState,useEffect} from "react"; 
import { fetchUsers } from "service/fetchUser";
import { TweetsList } from "components/TweetsList/TweetsList";
import { Loader } from "../../components/Loader/Loader";
import { LoadButton } from "components/LoadButton/LoadButton";
import { BackButton } from "components/BackButton/BackButton";
import css from './Tweets.module.css'

const Tweets = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers]=useState([]);
  const [page, setPage] = useState(1);


  
  useEffect(()=>{
    const getUsers = async () => {
      try{
        setIsLoading(true);
      const result = await fetchUsers(page);
      if(page===1){
      setUsers(result)} 
      else{
          setUsers(prevUsers => [...prevUsers, ...result])
      };
}
      catch (error) {
        console.log(error);
      }finally{
        setIsLoading(false)
      }
    };
   
    getUsers();
   
},[page])




const handleLoadMore = () => {
  setPage(prevPage => prevPage + 1);
};

  return (

    <div className={css.container}>
      <BackButton/>
      <TweetsList users={users}/>
      {isLoading && <Loader />}
      {users?.length>0&&users.length<12&&(<LoadButton onClick={handleLoadMore}/>)}</div>
    );
  };
  
  export default Tweets;