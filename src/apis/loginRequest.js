import apiRequest from "./instance";

const loginRequest = (email, password) => {
  return apiRequest
    .post("/auth/signin", {
      email,
      password,
    })
    .then((res) => {
      console.log(res);
      return "로그인";
    })
    .catch((err) => {
      console.log(err);
      const status = err.response.status;
      if (status === 401) alert("비밀번호가 틀렸습니다. 다시 확인해주세요.");
      else if (status === 404) alert("존재하지 않는 아이디입니다.");
    });
};

export default loginRequest;
