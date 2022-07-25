import React, { useState } from 'react';
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

const Comment = (props: CommentProps) => {
  const [vote, setVote] = useState<number>(props.score);

  const voteUp = () => {
    setVote((lastVote) => lastVote + 1);
  };

  const voteDown = () => {
    setVote((lastVote) => lastVote - 1);
  };

  return (
    <CommentStyled>
      <div>
        <CommentScore>
          <VoteButtonStyled onClick={voteUp}>
            <img src={IconPlus} alt="IconPlus" />
          </VoteButtonStyled>
          {vote}
          <VoteButtonStyled onClick={voteDown}>
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
};

export default Comment;
