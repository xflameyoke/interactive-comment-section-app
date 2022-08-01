import React, { useState } from 'react';
import {
  CommentReply,
  CommentStyled,
  IconReplyStyled,
  UserAvatar,
  UserStyled,
  UserStyledDate,
  UserStyledName,
  UserStyledReply,
} from './comment.styled';
import IconReply from '../../assets/icons/icon-reply.svg';
import Reply from '../reply/reply';
import ScoreCounter from '../scoreCounter/scoreCounter';

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
  const [reply, setReply] = useState(false);

  const voteUp = () => {
    setVote((lastVote) => lastVote + 1);
  };

  const voteDown = () => {
    setVote((lastVote) => lastVote - 1);
  };

  const replyHandler = () => {
    setReply(!reply);
  };

  return (
    <>
      <CommentStyled>
        <div>
          <ScoreCounter voteUp={voteUp} voteDown={voteDown} vote={vote} />
        </div>
        <div>
          <UserStyled>
            <UserAvatar src={props.user.image.png} alt="UserAvatar" />
            <UserStyledName>{props.user.username}</UserStyledName>
            <UserStyledDate>{props.createdAt}</UserStyledDate>
            <UserStyledReply onClick={replyHandler}>
              <IconReplyStyled src={IconReply} alt="IconReply" />
              Reply
            </UserStyledReply>
          </UserStyled>
          <p>{props.content}</p>
        </div>
      </CommentStyled>
      <CommentReply>{reply ? <Reply /> : ''}</CommentReply>
    </>
  );
};

export default Comment;
