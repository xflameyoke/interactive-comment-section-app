import styled from 'styled-components';

export const ScoreStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  flex-direction: column;
  width: 30px;
  height: 70px;
  color: ${({ theme }) => theme.colors.moderateBlue};
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.veryLightGray};
  margin-left: 5px;
  font-weight: bold;
`;

export const ScoreButtonStyled = styled.button`
  border: none;
  width: 20px;
  height: 20px;
  background: ${({ theme }) => theme.colors.veryLightGray};
  cursor: pointer;
  border-radius: 25px;
  color: lightgrey;

  img {
    color: '#FFFFFF';
  }
`;
