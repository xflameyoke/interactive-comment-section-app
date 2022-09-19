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
    color: ${({ theme }) => theme.colors.grayishBlue};
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

export const CommentStyledDelete = styled.div`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.softRed};
  font-weight: bold;
  margin: 0 10px 0 auto;
`;

export const CommentIconDeleteStyled = styled.img`
  width: 12px;
  height: 12px;
  margin-right: 5px;
`;

export const CommentEditStyled = styled.div`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.moderateBlue};
  font-weight: bold;
`;

export const CommentIconEditStyled = styled.img`
  width: 12px;
  height: 12px;
  margin-right: 5px;
`;

export const CommentEditInput = styled.textarea`
  width: 100%;
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
