import React, { useState } from 'react';
import {
  IconDeleteStyled,
  IconEditStyled,
  ReplyEditStyled,
  ReplyHeader,
  ReplyHeaderAvatar,
  ReplyHeaderDate,
  ReplyHeaderYou,
  ReplyNameStyled,
  ReplyStyled,
  ReplyStyledDelete,
  ReplyWrapper,
} from './reply.styled';
import Avatar from '../../assets/avatars/image-juliusomo.png';
import ScoreCounter from '../scoreCounter/scoreCounter';
import IconDelete from '../../assets/icons/icon-delete.svg';
import IconEdit from '../../assets/icons/icon-edit.svg';

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
      <ReplyWrapper>
        <ReplyStyled>
          <div>
            <ScoreCounter
              voteUp={voteUp}
              voteDown={voteDown}
              vote={initialScore}
            />
          </div>
          <div>
            <ReplyHeader>
              <ReplyHeaderAvatar src={Avatar} alt="Current User" />
              <ReplyNameStyled>juliusomo</ReplyNameStyled>
              <ReplyHeaderYou>you</ReplyHeaderYou>
              <ReplyHeaderDate>2 days ago</ReplyHeaderDate>
              <ReplyStyledDelete>
                <IconDeleteStyled src={IconDelete} alt="Icon Delete" />
                Delete
              </ReplyStyledDelete>
              <ReplyEditStyled>
                <IconEditStyled src={IconEdit} alt="Icon Edit" />
                Edit
              </ReplyEditStyled>
            </ReplyHeader>
            <p>Random text</p>
          </div>
        </ReplyStyled>
      </ReplyWrapper>
    </>
  );
};

export default Reply;
