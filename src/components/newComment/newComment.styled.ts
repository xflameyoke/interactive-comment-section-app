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
  margin-top: 10px;
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

export const NewCommentInput = styled.input`
  width: 70%;
  height: 100px;
  border: 2px solid ${({ theme }) => theme.colors.lightGray};
  border-radius: 10px;
  box-sizing: border-box;
  padding: 10px 0 50px 15px;
  font-size: 16px;

  ::placeholder {
    color: ${({ theme }) => theme.colors.darkBlue};
  }

  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.darkBlue};
  }
`;

export const NewCommentButtonWrapper = styled.div`
  margin-right: 10px;
`;
