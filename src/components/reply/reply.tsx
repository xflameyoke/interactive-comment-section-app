import React from 'react';
import { ReplyAvatar, ReplyInput, ReplyStyled } from './reply.styled';
import ReplyButton from '../replyButton/replyButton';

const Reply = () => (
  <ReplyStyled>
    <ReplyAvatar alt="Current User" />
    <ReplyInput type="text" />
    <div>
      <ReplyButton />
    </div>
  </ReplyStyled>
);

export default Reply;
