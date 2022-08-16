import React from 'react';
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
}

const NewComment = (props: AddNewComment) => {
  return (
    <NewCommentStyled>
      <NewCommentAvatar src={Avatar} alt="User Avatar" />
      <NewCommentInput type="text" placeholder="New a comment" />
      <NewCommentButtonWrapper>
        <Button button={'ADD'} onClick={props.addNewComment} />
      </NewCommentButtonWrapper>
    </NewCommentStyled>
  );
};

export default NewComment;
