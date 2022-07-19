import React from 'react';
import {
  CommentScore,
  CommentStyled,
  UserStyled,
  UserStyledDate,
  UserStyledName,
  UserStyledReply,
} from './comment.styled';
interface CommentProps {
  id: number;
  content: string;
  score: number;
  createdAt: string;
  user: {
    image: {
      png: string;
    };
    username: string;
  };
}

const Comment = (props: CommentProps) => (
  <CommentStyled key={props.id}>
    <div>
      <CommentScore>
        <div>+</div>
        {props.score}
        <div>-</div>
      </CommentScore>
    </div>
    <div>
      <UserStyled>
        <img src={props.user.image.png} />{' '}
        <UserStyledName>{props.user.username}</UserStyledName>
        <UserStyledDate>{props.createdAt}</UserStyledDate>
        <UserStyledReply>reply</UserStyledReply>
      </UserStyled>
      <div>{props.content}</div>
    </div>
  </CommentStyled>
);

export default Comment;
