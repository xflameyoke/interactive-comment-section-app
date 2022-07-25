import React from 'react';
import { ReplyAvatar, ReplyInput, ReplyStyled } from './reply.styled';
import data from '../../data.json';
import ReplyButton from '../replyButton/replyButton';

const Reply = () => (
  <ReplyStyled>
    <ReplyAvatar src={data.currentUser.image.png} alt="Current User" />
    <ReplyInput type="text" />
    <div>
      <ReplyButton />
    </div>
  </ReplyStyled>
);

export default Reply;
