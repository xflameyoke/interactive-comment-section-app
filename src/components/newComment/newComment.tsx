import React, { ChangeEvent } from 'react';
import {
  NewCommentAvatar,
  NewCommentButtonWrapper,
  NewCommentInput,
  NewCommentStyled,
} from './newComment.styled';
import Avatar from '../../assets/avatars/image-juliusomo.png';
import Button from '../button/button';

interface AddNewComment {
  addNewComment?: () => void;
  newCommentText?: string;
  newCommentHandler?: (e: ChangeEvent<HTMLInputElement>) => void;
  isReply?: boolean;
}

const NewComment = (props: AddNewComment) => {
  return (
    <NewCommentStyled>
      <NewCommentAvatar src={Avatar} alt="User Avatar" />
      <NewCommentInput
        type="text"
        placeholder="Add a comment"
        onChange={props.newCommentHandler}
        value={props.newCommentText}
      />
      <NewCommentButtonWrapper>
        <Button button={'ADD'} onClick={props.addNewComment} />
      </NewCommentButtonWrapper>
    </NewCommentStyled>
  );
};

export default NewComment;
