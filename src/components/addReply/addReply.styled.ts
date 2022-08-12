import styled, { keyframes } from 'styled-components';

const come = keyframes`
  0% {
    opacity: 0; transform: translateY(-100%);
  }
  100% {
    opacity: 1; transform: translateY(0);
  }
`;

export const AddReplyStyled = styled.div`
  background: ${({ theme }) => theme.colors.white};
  animation-name: ${come};
  animation-duration: 1s;
  animation-iteration-count: ease-in;
  color: ${({ theme }) => theme.colors.grayishBlue};
  height: 100px;
  border-radius: 10px;
  margin: 10px;
`;
