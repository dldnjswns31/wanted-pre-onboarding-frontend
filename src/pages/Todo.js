import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import createTodo from "../apis/createTodo";
import getTodo from "../apis/getTodo";
import TodoItem from "../components/TodoItem";

function Todo() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    getTodo().then((res) => {
      setTodos(res.data);
    });
  }, []);
  const handleLogoutClick = () => {
    alert("로그아웃 되었습니다.");
    localStorage.removeItem("onboarding_user_token");
    navigate("/");
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleCreateClick = (e) => {
    e.preventDefault();
    if (inputValue) {
      createTodo(inputValue).then((res) => setTodos([...todos, res.data]));
      setInputValue("");
    } else {
      alert("내용을 입력해주세요.");
    }
  };

  return (
    <>
      {todos && (
        <StyledContainer>
          <StyledTitleContainer>
            <StyledTitle>To-Do List</StyledTitle>
            <StyledLogout onClick={handleLogoutClick}>로그아웃</StyledLogout>
          </StyledTitleContainer>
          <StyledTodosContainer>
            <StyledTodos>
              {todos &&
                todos.map((data) => {
                  return (
                    <TodoItem
                      key={data.id}
                      data={data}
                      todos={todos}
                      setTodos={setTodos}
                    />
                  );
                })}
            </StyledTodos>
          </StyledTodosContainer>
          <StyledInputContainer>
            <StyledForm>
              <StyledInput
                type="text"
                maxLength={20}
                placeholder="Write Todo..."
                value={inputValue}
                onChange={handleInputChange}
              />
              <StyledCreateButton onClick={handleCreateClick}>
                ➕
              </StyledCreateButton>
            </StyledForm>
          </StyledInputContainer>
        </StyledContainer>
      )}
    </>
  );
}

export default Todo;

const StyledContainer = styled.div`
  display: flex;
  width: 30rem;
  height: 40rem;
  border-radius: 0.5rem;
  flex-direction: column;
  box-shadow: 0px 0px 20px 2px rgba(0, 0, 0, 0.5);
`;

const StyledTitleContainer = styled.div`
  position: relative;
`;

const StyledTitle = styled.h3`
  display: inline-block;
  width: 100%;
  margin: 0 0 1rem 0;
  flex: 15 0;
  border-bottom: 1px solid ${({ theme }) => theme.palette.gray};
  font-size: 2rem;
  line-height: 200%;
  text-align: center;
`;

const StyledLogout = styled.button`
  position: absolute;
  height: 40%;
  top: 50%;
  right: 1rem;
  border: 1px solid ${({ theme }) => theme.palette.gray};
  border-radius: 0.5rem;
  transform: translateY(-75%);
`;

const StyledTodosContainer = styled.div`
  padding: 0 0 0 1rem;
  flex: 80 0;
  overflow-y: scroll;
  /* ::-webkit-scrollbar {
    display: none;
  } */
`;

const StyledTodos = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  li:first-of-type {
    margin-top: 0;
  }
  li:last-of-type {
    margin-bottom: 0;
  }
`;

const StyledInputContainer = styled.div`
  width: 100%;
  flex: 5 0;
`;

const StyledForm = styled.form`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: flex-end;
`;

const StyledInput = styled.input`
  height: 100%;
  padding: 0 0.5rem;
  flex: 10 0;
  box-sizing: border-box;
  border: none;
  border-top: 1px solid ${({ theme }) => theme.palette.gray};
  border-right: 1px solid ${({ theme }) => theme.palette.gray};
  border-radius: 0 0 0 0.5rem;
  &:focus {
    outline: none;
  }
`;

const StyledCreateButton = styled.button`
  height: 100%;
  flex: 1 0;
  border: none;
  border-top: 1px solid ${({ theme }) => theme.palette.gray};
  border-radius: 0 0 0.5rem 0;
  box-sizing: border-box;
`;
