import axios from 'axios';

export const updateUser = async (id, followers) => {
  try {
    const { data } = await axios.put(`/users/${id}`, followers);

    return data;
  } catch (error) {
    console.log(error);
  }
};
