import apiRequest from "./instance";

const signupRequest = (email, password) => {
  return apiRequest
    .post(
      "/auth/signup",
      {
        email,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((res) => {
      return "회원가입";
    })
    .catch((err) => {
      alert(err.response.data.message);
    });
};

export default signupRequest;
