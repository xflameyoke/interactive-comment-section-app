import React, { ChangeEvent, useState } from 'react';
import {
  NewCommentAvatar,
  NewCommentButtonWrapper,
  NewCommentInput,
  NewCommentStyled,
} from './newComment.styled';
import Avatar from '../../assets/avatars/image-juliusomo.png';
import Button from '../button/button';

const NewComment = () => {
  const [comment, setComment] = useState('');

  const commentDataHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  return (
    <NewCommentStyled>
      <NewCommentAvatar src={Avatar} alt="User Avatar" />
      <NewCommentInput
        type="text"
        placeholder="New a comment"
        onChange={commentDataHandler}
      />
      <NewCommentButtonWrapper>
        <Button button={'reply'} />
        {comment}
      </NewCommentButtonWrapper>
    </NewCommentStyled>
  );
};

export default NewComment;
