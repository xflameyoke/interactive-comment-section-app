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
`;

export const UserStyled = styled.div`
  display: flex;
  align-items: center;
`;

export const UserStyledName = styled.div`
  color: black;
`;

export const UserStyledDate = styled.div`
  color: grey;
`;

export const UserStyledReply = styled.div`
  margin-left: auto;
  color: purple;
`;
