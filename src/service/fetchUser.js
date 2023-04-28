import axios from "axios";

axios.defaults.baseURL = 'https://644a4dafa8370fb3214a5236.mockapi.io/api/v1';


  export const fetchUsers = async (page, limit=3) => {
    try {
      const {data} = await axios.get("/users", {
        params: {
          page,
          limit,
        },
      });
      
      return data;
    } catch (error) {
      console.log(error);
    }
  };

