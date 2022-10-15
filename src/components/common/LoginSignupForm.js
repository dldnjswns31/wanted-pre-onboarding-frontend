import styled from "styled-components";
import handleLoginSubmit from "../../apis/handLoginClick";

function LoginSignupForm({ title }) {
  return (
    <StyledContainer>
      <form action="submit">
        <StyledTitle>{title}</StyledTitle>
        <StyledInputContainer>
          <StyledLabel htmlFor="email">이메일</StyledLabel>
          <StyledInput type="text" name="email" />
          <div>유효성</div>
        </StyledInputContainer>
        <StyledInputContainer>
          <StyledLabel htmlFor="password">비밀번호</StyledLabel>
          <StyledInput type="password" name="password" />
          <div>유효성</div>
        </StyledInputContainer>
        <StyledButtonContainer>
          <StyledSubmitButton
            type="submit"
            onClick={() => {
              handleLoginSubmit();
            }}
          >
            로그인
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

const StyledButtonContainer = styled.div`
  width: 100%;
  margin-top: 2rem;
`;

const StyledSubmitButton = styled.button`
  width: 100%;
  height: 3rem;
  border: 1px solid ${({ theme }) => theme.palette.blue};
  border-radius: 0.4rem;
  background-color: ${({ theme }) => theme.palette.blue};
  color: ${({ theme }) => theme.palette.white};
  cursor: pointer;
  font-size: 1.5rem;
  transition: all 0.1s linear;

  &:hover {
    background-color: ${({ theme }) => theme.palette.white};
    border: 1px solid ${({ theme }) => theme.palette.blue};
    color: ${({ theme }) => theme.palette.blue};
  }
`;
