import signupRequest from "../apis/signupRequest";
import LoginSignupForm from "../components/common/LoginSignupForm";

function Signup() {
  return <LoginSignupForm title={"회원가입"} apiRequest={signupRequest} />;
}

export default Signup;
