import axios from "axios";

const apiRequest = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

apiRequest.defaults.headers.common["Content-Type"] = "application/json";

if (localStorage.getItem("onboarding_user_token")) {
  apiRequest.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${localStorage.getItem("onboarding_user_token")}`;
}

apiRequest.interceptors.response.use(function (res) {
  const token = res.data.access_token;
  if (token) {
    localStorage.setItem("onboarding_user_token", token);
  }
  apiRequest.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${localStorage.getItem("onboarding_user_token")}`;
  return res;
});

export default apiRequest;
