import React from 'react';
import {
  CommentScore,
  CommentStyled,
  IconReplyStyled,
  UserAvatar,
  UserStyled,
  UserStyledDate,
  UserStyledName,
  UserStyledReply,
  VoteButtonStyled,
} from './comment.styled';
import IconReply from '../../icons/icon-reply.svg';
import IconPlus from '../../icons/icon-plus.svg';
import IconMinus from '../../icons/icon-minus.svg';

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
        <VoteButtonStyled>
          <img src={IconPlus} alt="IconPlus" />
        </VoteButtonStyled>
        {props.score}
        <VoteButtonStyled>
          <img src={IconMinus} alt="IconMinus" />
        </VoteButtonStyled>
      </CommentScore>
    </div>
    <div>
      <UserStyled>
        <UserAvatar src={props.user.image.png} alt="UserAvatar" />
        <UserStyledName>{props.user.username}</UserStyledName>
        <UserStyledDate>{props.createdAt}</UserStyledDate>
        <UserStyledReply>
          <IconReplyStyled src={IconReply} alt="IconReply" />
          Reply
        </UserStyledReply>
      </UserStyled>
      <p>{props.content}</p>
    </div>
  </CommentStyled>
);

export default Comment;
