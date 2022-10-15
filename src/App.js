import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Todo from "./pages/Todo";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    const userToken = localStorage.getItem("onboarding_user_token");
    if (userToken) {
      navigate("/todo");
    }
  }, []);
  return (
    <div>
      <StyledMainContainer>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/todo" element={<Todo />} />
        </Routes>
      </StyledMainContainer>
    </div>
  );
}

const StyledMainContainer = styled.main`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export default App;
