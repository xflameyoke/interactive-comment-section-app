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

export const CommentStyled = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 11fr;
  grid-column-gap: 20px;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 20px;
  border-radius: 10px;
  animation-name: ${come};
  animation-duration: 1s;
  animation-iteration-count: ease-in;

  p {
    width: 90%;
    color: ${({ theme }) => theme.colors.grayishBlue};
    font-size: 12px;
  }

  input {
    width: 90%;
    height: 50px;
    border: none;
  }
`;

export const UserStyled = styled.div`
  display: flex;
  align-items: center;
`;

export const UserAvatar = styled.img`
  height: 35px;
  margin-right: 10px;
`;

export const UserStyledName = styled.div`
  color: ${({ theme }) => theme.colors.darkBlue};
  margin: 5px;
  font-weight: bold;
  margin-right: 10px;
`;

export const UserStyledDate = styled.div`
  color: ${({ theme }) => theme.colors.grayishBlue};
  font-size: 12px;
`;

export const UserStyledReply = styled.div`
  margin-left: auto;
  color: ${({ theme }) => theme.colors.moderateBlue};
  border: none;
  background: white;
  cursor: pointer;
  font-weight: bold;
`;

export const IconReplyStyled = styled.img`
  width: 12px;
  height: 12px;
  margin-right: 3px;
`;

export const CommentReply = styled.div`
  margin: 10px auto 0 auto;
`;
