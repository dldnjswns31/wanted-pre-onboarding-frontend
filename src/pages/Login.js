import styled from "styled-components";

function Login() {
  return (
    <StyledLoginContainer>
      <form action="submit">
        <StyledTitle>로그인</StyledTitle>
        <StyledInputContainer>
          <StyledLabel htmlFor="email">이메일</StyledLabel>
          <StyledInput type="text" name="email" />
          <div></div>
        </StyledInputContainer>
        <StyledInputContainer>
          <StyledLabel htmlFor="password">비밀번호</StyledLabel>
          <StyledInput type="password" name="password" />
        </StyledInputContainer>
        <StyledButtonContainer>
          <StyledSubmitButton type="submit">로그인</StyledSubmitButton>
        </StyledButtonContainer>
      </form>
    </StyledLoginContainer>
  );
}

export default Login;

const StyledLoginContainer = styled.div`
  position: relative;
  min-width: 25rem;
  min-height: 20rem;
`;

const StyledTitle = styled.h1`
  margin-top: 0;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #999999;
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
  margin: 0;
  padding: 0 0.5rem;
  border: 1px solid #999999;
  border-radius: 0.4rem;
  box-sizing: border-box;
`;

const StyledButtonContainer = styled.div`
  width: 100%;
  margin-top: 2rem;
`;

const StyledSubmitButton = styled.button`
  width: 100%;
  height: 3rem;
  border: 1px solid #0b6bff;
  border-radius: 0.4rem;
  background-color: #0b6bff;
  color: #ffffff;
  cursor: pointer;
  font-size: 1.5rem;
  transition: all 0.1s linear;

  &:hover {
    background-color: #ffffff;
    border: 1px solid #0b6bff;
    color: #0b6bff;
  }
`;
