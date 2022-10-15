import loginRequest from "../apis/loginRequest";
import LoginSignupForm from "../components/common/LoginSignupForm";

function Login() {
  return <LoginSignupForm title={"로그인"} apiRequest={loginRequest} />;
}

export default Login;
