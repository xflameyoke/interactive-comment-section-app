import styled from 'styled-components';

export const CommentStyled = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 11fr;
  grid-column-gap: 20px;
`;

export const CommentScore = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 20px;
  height: 100%;
  color: purple;
  border: 1px solid purple;
  border-radius: 25px;
  background: lightgrey;

  img {
    color: ${({ theme }) => theme.colors.moderateBlue};
  }
`;

export const UserStyled = styled.div`
  display: flex;
  align-items: center;
`;

export const UserAvatar = styled.img`
  height: 35px;
`;

export const UserStyledName = styled.div`
  color: black;
  margin: 5px;
  font-weight: bold;
`;

export const UserStyledDate = styled.div`
  color: grey;
  font-size: 12px;
`;

export const UserStyledReply = styled.div`
  margin-left: auto;
  color: ${({ theme }) => theme.colors.moderateBlue};
  border: none;
  background: white;
  cursor: pointer;
`;

export const IconReplyStyled = styled.img`
  width: 12px;
  height: 12px;
  margin-right: 3px;
`;
