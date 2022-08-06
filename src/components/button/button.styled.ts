import styled from 'styled-components';

export const ButtonStyled = styled.button`
  height: 50px;
  width: 110px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.moderateBlue};
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.lightGrayishBlue};
    transition: 1s;
  }
`;
