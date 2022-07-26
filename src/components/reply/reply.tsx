import React from 'react';
import {
  ReplyAvatar,
  ReplyButtonWrapper,
  ReplyInput,
  ReplyStyled,
} from './reply.styled';
import ReplyButton from '../replyButton/replyButton';
import Avatar from '../../assets/avatars/image-juliusomo.png';

const Reply = () => (
  <ReplyStyled>
    <ReplyAvatar src={Avatar} alt="Current User" />
    <ReplyInput type="text" />
    <ReplyButtonWrapper>
      <ReplyButton />
    </ReplyButtonWrapper>
  </ReplyStyled>
);

export default Reply;
