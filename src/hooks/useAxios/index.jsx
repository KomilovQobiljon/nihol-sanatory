import axios from 'axios';

const useAxios = () => {
  return async ({url, method = "GET", body, headers }) => {
    return await axios({
      url: `${process.env.REACT_APP_MAIN_URL}${url}`,
      method,
      data: {
        ...body,
      },
      headers: {
        Authorization: `Bearer ${localStorage.getItem('userToken')}`,
        "Content-Type": "application/json",
        "Allow-Control-Origin": true,
        ...headers,
      }
    })
      .then((res) => res)
      .catch((err) => err);
  }
}

export default useAxios;