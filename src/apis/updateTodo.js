import apiRequest from "./instance";

const updateTodo = (data) => {
  const { id, todo, isCompleted } = data;
  return apiRequest
    .put(`/todos/${id}`, {
      todo,
      isCompleted,
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

export default updateTodo;
