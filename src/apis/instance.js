import axios from "axios";

const apiRequest = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

apiRequest.defaults.headers.common["Content-Type"] = "application/json";
apiRequest.defaults.headers.common[
  "Authorization"
] = `Bearer ${localStorage.getItem("onboarding_user_token")}`;

export default apiRequest;
