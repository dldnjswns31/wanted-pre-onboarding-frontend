import styled, { css } from "styled-components";
import { useState } from "react";
import theme from "../../styles/theme";

function LoginSignupForm({ title, handleButtonClick }) {
  // email validation
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [emailValidMessage, setEmailValidMessage] = useState("");

  // password validation
  const [password, setPassword] = useState("");
  const [passwordValid, setPasswordValid] = useState(false);
  const [passwordValidMessage, setPasswordValidMessage] = useState("");

  const handleEmailChange = (e) => {
    const regEmail =
      /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
    if (regEmail.test(e.target.value)) {
      setEmailValid(true);
      setEmailValidMessage("");
      setEmail(e.target.value);
    } else {
      setEmailValid(false);
      setEmailValidMessage("올바른 이메일을 입력해주세요");
    }
  };
  const handlePasswordChange = (e) => {
    if (e.target.value.length >= 8) {
      setPasswordValid(true);
      setPasswordValidMessage("");
      setPassword(e.target.value);
    } else {
      setPasswordValid(false);
      setPasswordValidMessage("비밀번호는 8자 이상입니다.");
    }
  };

  return (
    <StyledContainer>
      <form action="submit">
        <StyledTitle>{title}</StyledTitle>
        <StyledInputContainer>
          <StyledLabel htmlFor="email">이메일</StyledLabel>
          <StyledInput type="text" name="email" onChange={handleEmailChange} />
          <StyledValid>{emailValidMessage}</StyledValid>
        </StyledInputContainer>
        <StyledInputContainer>
          <StyledLabel htmlFor="password">비밀번호</StyledLabel>
          <StyledInput
            type="password"
            name="password"
            onChange={handlePasswordChange}
          />
          <StyledValid>{passwordValidMessage}</StyledValid>
        </StyledInputContainer>
        <StyledButtonContainer>
          <StyledSubmitButton
            type="submit"
            disabled={emailValid && passwordValid ? false : true}
            onClick={(e) => {
              handleButtonClick(e, email, password);
            }}
          >
            {title}
          </StyledSubmitButton>
        </StyledButtonContainer>
      </form>
    </StyledContainer>
  );
}

export default LoginSignupForm;

const StyledContainer = styled.div`
  position: relative;
  min-width: 25rem;
  min-height: 20rem;
`;

const StyledTitle = styled.h1`
  margin-top: 0;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.palette.gray};
  font-weight: normal;
`;

const StyledInputContainer = styled.div`
  margin-bottom: 1rem;
`;

const StyledLabel = styled.label`
  display: inline-block;
  margin-bottom: 1rem;
  font-size: 1.2rem;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 3rem;
  margin: 0 0 0.5rem 0;
  padding: 0 0.5rem;
  border: 1px solid ${({ theme }) => theme.palette.gray};
  border-radius: 0.4rem;
  box-sizing: border-box;
`;

const StyledValid = styled.div`
  color: ${({ theme }) => theme.palette.red};
  font-size: 0.8rem;
`;

const StyledButtonContainer = styled.div`
  width: 100%;
  margin-top: 2rem;
`;

const StyledSubmitButton = styled.button`
  width: 100%;
  height: 3rem;
  border-radius: 0.4rem;
  font-size: 1.5rem;
  transition: all 0.1s linear;

  ${({ disabled, theme }) =>
    disabled
      ? css`
          background-color: ${theme.palette.gray};
          border: 1px solid ${theme.palette.gray};
          color: ${theme.palette.white};
        `
      : css`
          border: 1px solid ${({ theme }) => theme.palette.blue};
          background-color: ${({ theme }) => theme.palette.blue};
          color: ${({ theme }) => theme.palette.white};
          cursor: pointer;
          &:hover {
            background-color: ${({ theme }) => theme.palette.white};
            border: 1px solid ${({ theme }) => theme.palette.blue};
            color: ${({ theme }) => theme.palette.blue};
          }
        `}
`;
