import apiRequest from "./instance";

const deleteTodo = (id) => {
  return apiRequest.delete(`/todos/${id}`).catch((err) => console.log(err));
};

export default deleteTodo;
