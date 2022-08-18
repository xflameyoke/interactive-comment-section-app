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

export const ReplyWrapper = styled.div`
  border-left: 2px solid ${({ theme }) => theme.colors.lightGray};
  margin: 10px 0 10px 45px;
`;

export const ReplyStyled = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 11fr;
  grid-column-gap: 20px;
  padding: 20px;
  margin: 0 0 10px 35px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  animation-name: ${come};
  animation-duration: 1s;
  animation-iteration-count: ease-in;
  color: ${({ theme }) => theme.colors.grayishBlue};
`;

export const ReplyHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ReplyNameStyled = styled.div`
  color: ${({ theme }) => theme.colors.darkBlue};
  font-weight: bold;
`;

export const ReplyHeaderYou = styled.div`
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

export const ReplyStyledDelete = styled.div`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.softRed};
  font-weight: bold;
  margin-left: auto;
`;

export const IconDeleteStyled = styled.img`
  width: 12px;
  height: 12px;
  margin-right: 5px;
`;

export const ReplyEditStyled = styled.div`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.moderateBlue};
  font-weight: bold;
  margin-right: 10px;
`;

export const IconEditStyled = styled.img`
  width: 12px;
  height: 12px;
  margin-right: 5px;
`;

export const ReplyHeaderAvatar = styled.img`
  width: 30px;
  height: 30px;
`;

export const ReplyHeaderDate = styled.div`
  color: ${({ theme }) => theme.colors.grayishBlue};
  font-size: 12px;
`;

export const ReplyInputEdit = styled.div`
  textarea {
    width: 100%;
    height: 70px;
    margin: 5px 0 5px 0;
    border: 2px solid ${({ theme }) => theme.colors.lightGray};
    border-radius: 10px;
    box-sizing: border-box;
    padding: 10px 0 50px 15px;
    font-size: 16px;
    overflow-y: hidden;
    resize: none;
    font-family: 'Rubik', sans-serif;

    ::placeholder {
      color: ${({ theme }) => theme.colors.darkBlue};
    }

    &:focus {
      outline: none;
      border: 2px solid ${({ theme }) => theme.colors.lightGray};
    }
  }
`;

export const ReplyButtonWrapper = styled.div`
  margin-left: 80%;
`;

export const ReplyReplyStyled = styled.div`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.moderateBlue};
  font-weight: bold;
  margin-left: auto;
`;

export const IconReplyStyled = styled.img`
  width: 12px;
  height: 12px;
  margin-right: 5px;
`;

export const ReplyReply = styled.div`
  margin: 10px auto 0 auto;
`;
