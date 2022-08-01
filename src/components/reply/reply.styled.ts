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
  margin: 10px 0 10px auto;
  padding-top: 20px;
  width: 90%;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  gap: 15px;
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

export const ReplyText = styled.div`
  color: red;
`;

export const ReplyYou = styled.div`
  border-radius: 5px;
  height: 20px;
  width: 40px;
  align-items: center;
  justify-content: center;
  display: flex;
  padding: 2px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.moderateBlue};
`;

export const ReplyAvatar = styled.img`
  margin: 20px 0 0 30px;
  width: 30px;
  height: 30px;
`;

export const ReplyLine = styled.div`
  display: flex;
  border: 1px solid ${({ theme }) => theme.colors.darkBlue};
`;
