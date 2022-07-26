import styled, { keyframes } from 'styled-components';

const come = keyframes`
  0% { 
    opacity: 0; transform: translateY(-100%); 
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const ReplyStyled = styled.div`
  margin: 10px 0 10px 0;
  padding-top: 20px;
  width: 100%;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: first-baseline;
  justify-content: space-around;
  padding-top: 0px;
  animation-name: ${come};
  animation-duration: 1s;
  animation-iteration-count: ease-in;
`;

export const ReplyButtonWrapper = styled.div`
  margin: 20px 40px 0 0;
`;

export const ReplyInput = styled.input`
  position: relative;
  resize: none;
  margin: 20px;
  width: 70%;
  height: 80px;
  border: 2px solid ${({ theme }) => theme.colors.lightGray};
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.darkBlue};
  font-size: 12px;
  box-sizing: border-box;
  padding: 10px 0 50px 15px;

  &:focus {
    outline: none;
    border: 2px solid ${({ theme }) => theme.colors.darkBlue};
  }
`;

export const ReplyAvatar = styled.img`
  margin: 20px 0 0 30px;
  width: 30px;
  height: 30px;
`;
