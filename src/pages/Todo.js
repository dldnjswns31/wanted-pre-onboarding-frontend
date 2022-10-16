import React, { useEffect, useState } from "react";
import styled from "styled-components";
import createTodo from "../apis/createTodo";
import getTodo from "../apis/getTodo";
import TodoItem from "../components/TodoItem";

function Todo() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    getTodo().then((res) => {
      setTodos(res.data);
    });
  }, []);

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
          <StyledTitle>To-Do List</StyledTitle>
          <StyledTodosContainer>
            <StyledTodos>
              {todos &&
                todos.map((data, idx) => {
                  return (
                    <TodoItem
                      key={Date.now() + idx}
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
  /* background-color: ${({ theme }) => theme.palette.gray}; */
  flex-direction: column;
`;

const StyledTitle = styled.h3`
  width: 100%;
  margin: 0 0 1rem 0;
  flex: 1 0;
  border-bottom: 1px solid ${({ theme }) => theme.palette.gray};
  font-size: 2rem;
  line-height: 200%;
  text-align: center;
`;

const StyledTodosContainer = styled.div`
  padding: 0 0 0 1rem;
  flex: 8 0;
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
  flex: 1 0;
`;

const StyledForm = styled.form`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
`;

const StyledInput = styled.input`
  height: 2rem;
  flex: 10 0;
  box-sizing: border-box;
  &:focus {
    outline: none;
  }
`;

const StyledCreateButton = styled.button`
  height: 2rem;
  flex: 1 0;
  cursor: pointer;
`;
