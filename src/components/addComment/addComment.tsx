import React, { ChangeEvent, useState } from 'react';
import {
  AddCommentAvatar,
  AddCommentButtonWrapper,
  AddCommentInput,
  AddCommentStyled,
} from './addComment.styled';
import Avatar from '../../assets/avatars/image-juliusomo.png';
import SendButton from '../sendButton/sendButton';

const AddComment = () => {
  const [comment, setComment] = useState('');

  const commentDataHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  return (
    <AddCommentStyled>
      <AddCommentAvatar src={Avatar} alt="User Avatar" />
      <AddCommentInput
        type="text"
        placeholder="Add a comment"
        onChange={commentDataHandler}
      />
      <AddCommentButtonWrapper>
        <SendButton />
      </AddCommentButtonWrapper>
    </AddCommentStyled>
  );
};

export default AddComment;
