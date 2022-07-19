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
        <img src={IconPlus} alt="IconPlus" />
        {props.score}
        <img src={IconMinus} alt="IconMinus" />
      </CommentScore>
    </div>
    <div>
      <UserStyled>
        <UserAvatar src={props.user.image.png} alt="UserAvatar" />
        <UserStyledName>{props.user.username}</UserStyledName>
        <UserStyledDate>{props.createdAt}</UserStyledDate>
        <UserStyledReply>
          <IconReplyStyled src={IconReply} alt="IconReply" />
          reply
        </UserStyledReply>
      </UserStyled>
      <div>{props.content}</div>
    </div>
  </CommentStyled>
);

export default Comment;
