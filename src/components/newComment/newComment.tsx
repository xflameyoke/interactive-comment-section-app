import React from 'react';
import {
  NewCommentAvatar,
  NewCommentButtonWrapper,
  NewCommentInput,
  NewCommentStyled,
} from './newComment.styled';
import Avatar from '../../assets/avatars/image-juliusomo.png';
import SendButton from '../sendButton/sendButton';

const NewComment = () => (
  <NewCommentStyled>
    <NewCommentAvatar src={Avatar} alt="User Avatar" />
    <NewCommentInput type="text" placeholder="Add a comment" />
    <NewCommentButtonWrapper>
      <SendButton />
    </NewCommentButtonWrapper>
  </NewCommentStyled>
);

export default NewComment;
