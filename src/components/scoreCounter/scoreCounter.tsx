import React from 'react';
import { ScoreButtonStyled, ScoreStyled } from './scoreCounter.styled';
import IconPlus from '../../assets/icons/icon-plus.svg';
import IconMinus from '../../assets/icons/icon-minus.svg';

interface Props {
  voteUp: () => void;
  voteDown: () => void;
  vote: number;
}

const scoreCounter: React.FC<Props> = (props) => (
  <ScoreStyled>
    <ScoreButtonStyled onClick={props.voteUp}>
      <img src={IconPlus} alt="IconPlus" />
    </ScoreButtonStyled>
    {props.vote}
    <ScoreButtonStyled onClick={props.voteDown}>
      <img src={IconMinus} alt="Icon Minus" />
    </ScoreButtonStyled>
  </ScoreStyled>
);

export default scoreCounter;
