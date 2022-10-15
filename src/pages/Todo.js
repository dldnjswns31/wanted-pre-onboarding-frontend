import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Todo() {
  const navigate = useNavigate();

  useEffect(() => {
    const userToken = localStorage.getItem("onboarding_user_token");
    if (!userToken) {
      navigate("/");
    }
  }, []);
  return <div>todo</div>;
}

export default Todo;
