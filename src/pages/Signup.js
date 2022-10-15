import handleSignupClick from "../apis/handleSignupClick";
import LoginSignupForm from "../components/common/LoginSignupForm";

function Signup() {
  return (
    <LoginSignupForm title={"회원가입"} handleButtonClick={handleSignupClick} />
  );
}

export default Signup;
