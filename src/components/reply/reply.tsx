import React, { useState } from 'react';
import {
  ReplyAvatar,
  ReplyButtonWrapper,
  ReplyContent,
  ReplyStyled,
  ReplyText,
  ReplyYou,
} from './reply.styled';
import ReplyButton from '../replyButton/replyButton';
import Avatar from '../../assets/avatars/image-juliusomo.png';
import ScoreCounter from '../scoreCounter/scoreCounter';

const Reply = () => {
  const [initialScore, setInitialScore] = useState(0);

  const voteUp = () => {
    setInitialScore((lastVote) => lastVote + 1);
  };

  const voteDown = () => {
    setInitialScore((lastVote) => lastVote - 1);
  };

  return (
    <>
      <ReplyStyled>
        <ReplyContent>
          <ScoreCounter
            voteUp={voteUp}
            voteDown={voteDown}
            vote={initialScore}
          />
          <ReplyAvatar src={Avatar} alt="Current User" />
          <ReplyYou>you</ReplyYou>
          <ReplyText />
          <ReplyButtonWrapper>
            <ReplyButton />
          </ReplyButtonWrapper>
        </ReplyContent>
      </ReplyStyled>
    </>
  );
};

export default Reply;
