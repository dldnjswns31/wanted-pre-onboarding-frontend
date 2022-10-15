import apiRequest from "./instance";

const createTodo = (todo) => {
  return apiRequest
    .post("/todos", {
      todo,
    })
    .then((res) => {
      return res;
    })
    .catch((err) => console.log(err));
};

export default createTodo;
