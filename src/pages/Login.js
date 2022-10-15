import styled from "styled-components";
import handleLoginClick from "../apis/handleLoginClick";
import LoginSignupForm from "../components/common/LoginSignupForm";

function Login() {
  return (
    <LoginSignupForm title={"로그인"} handleLoginClick={handleLoginClick} />
  );
}

export default Login;
