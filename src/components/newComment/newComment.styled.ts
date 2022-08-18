import styled, { keyframes } from 'styled-components';

const come = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const NewCommentStyled = styled.div`
  margin: 10px 0 10px 0;
  padding: 20px;
  display: flex;
  border-radius: 10px;
  justify-content: space-around;
  align-content: first-baseline;
  line-height: 50px;
  background: ${({ theme }) => theme.colors.white};
  animation-name ${come};
  animation-duration: 1s;
  animation-iteration-count: ease-in;
`;

export const NewCommentAvatar = styled.img`
  width: 35px;
  height: 35px;
`;

export const NewCommentInput = styled.textarea`
  width: 70%;
  height: 100px;
  border: 2px solid ${({ theme }) => theme.colors.lightGray};
  border-radius: 10px;
  box-sizing: border-box;
  padding: 10px 0 50px 15px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.grayishBlue};

  ::placeholder {
    color: ${({ theme }) => theme.colors.darkBlue};
  }

  &:focus {
    outline: none;
    border: 2px solid ${({ theme }) => theme.colors.lightGray};
  }
`;

export const NewCommentButtonWrapper = styled.div`
  margin-right: 10px;
`;
