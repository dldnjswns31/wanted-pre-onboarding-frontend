import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import deleteTodo from "../apis/deleteTodo";
import getTodo from "../apis/getTodo";
import updateTodo from "../apis/updateTodo";

function TodoItem({ data, todos, setTodos }) {
  const [isModify, setIsModify] = useState(false);
  const [changedData, setChangedData] = useState({ ...data });

  const handleModifyClick = () => {
    setIsModify(!isModify);
  };

  const handleDeleteClick = () => {
    const newTodos = todos.filter((todo) => {
      if (todo.id !== data.id) {
        return true;
      }
    });
    deleteTodo(data.id);
    setTodos([...newTodos]);
  };

  const handleInputCheck = (e) => {
    setChangedData({ ...changedData, isCompleted: !changedData.isCompleted });
  };

  const handleModifyCompleteClick = () => {
    updateTodo(changedData)
      .then(() => {
        handleModifyClick();
      })
      .catch((err) => console.log(err));
  };

  const handleModifyCancelClick = () => {
    setChangedData({ ...data });
    setIsModify(!isModify);
  };

  const handleInputChange = (e) => {
    setChangedData({ ...changedData, todo: e.target.value });
  };

  return (
    <StyledList>
      {isModify && (
        <StyledCheckbox
          type="checkbox"
          checked={changedData.isCompleted}
          onChange={handleInputCheck}
        ></StyledCheckbox>
      )}
      {isModify ? (
        <StyledInput
          value={changedData.todo}
          onChange={handleInputChange}
        ></StyledInput>
      ) : (
        <StyledSpan completed={changedData.isCompleted}>
          {changedData.todo}
        </StyledSpan>
      )}

      <StyledButtonContainer>
        {isModify ? (
          <>
            <StyledButton onClick={handleModifyCompleteClick}>⭕️</StyledButton>
            <StyledButton onClick={handleModifyCancelClick}>❌</StyledButton>
          </>
        ) : (
          <>
            <StyledButton onClick={handleModifyClick}>✏️</StyledButton>
            <StyledButton onClick={handleDeleteClick}>🗑</StyledButton>
          </>
        )}
      </StyledButtonContainer>
    </StyledList>
  );
}

export default TodoItem;

const StyledList = styled.li`
  position: relative;
  margin: 1rem 0;
`;

const StyledCheckbox = styled.input`
  margin: 0 2em 0 0;
`;

const StyledSpan = styled.span`
  font-size: 1.3rem;
  ${({ completed }) =>
    completed &&
    css`
      color: ${({ theme }) => theme.palette.gray};
      text-decoration: line-through;
    `}
`;

const StyledInput = styled.input``;

const StyledButtonContainer = styled.div`
  position: absolute;
  display: inline-block;
  right: 0;
`;

const StyledButton = styled.button`
  margin: 0 0.5rem 0 0;
  border: none;
  background: none;

  &:hover {
    background-color: ${({ theme }) => theme.palette.lightgray};
  }
`;
