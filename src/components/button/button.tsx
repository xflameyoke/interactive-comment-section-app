import React from 'react';
import { ButtonStyled } from './button.styled';

interface Props {
  button: string;
  onClick?: () => void;
}

const Button = (props: Props) => (
  <ButtonStyled onClick={props.onClick}>{props.button}</ButtonStyled>
);

export default Button;
