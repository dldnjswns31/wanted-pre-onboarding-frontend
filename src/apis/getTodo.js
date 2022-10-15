import apiRequest from "./instance";

const getTodo = () => {
  return apiRequest("/todos")
    .then((res) => {
      return res;
    })
    .catch((err) => console.log(err));
};

export default getTodo;
