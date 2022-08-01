import React from 'react';
import {
  ReplyAvatar,
  ReplyButtonWrapper,
  ReplyLine,
  ReplyStyled,
  ReplyText,
  ReplyYou,
} from './reply.styled';
import ReplyButton from '../replyButton/replyButton';
import Avatar from '../../assets/avatars/image-juliusomo.png';

const Reply = () => (
  <>
    <ReplyStyled>
      <ReplyLine />
      <ReplyAvatar src={Avatar} alt="Current User" />
      <ReplyYou>you</ReplyYou>
      <ReplyText />
      <ReplyButtonWrapper>
        <ReplyButton />
      </ReplyButtonWrapper>
    </ReplyStyled>
  </>
);

export default Reply;
