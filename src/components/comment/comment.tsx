import React, { useState } from 'react';
import {
  CommentEditStyled,
  CommentIconDeleteStyled,
  CommentIconEditStyled,
  CommentReply,
  CommentStyled,
  CommentStyledDelete,
  IconReplyStyled,
  UserAvatar,
  UserStyled,
  UserStyledDate,
  UserStyledName,
  UserStyledReply,
} from './comment.styled';
import IconReply from '../../assets/icons/icon-reply.svg';
import ScoreCounter from '../scoreCounter/scoreCounter';
import NewComment from '../newComment/newComment';
import IconDelete from '../../assets/icons/icon-delete.svg';
import IconEdit from '../../assets/icons/icon-edit.svg';

interface CommentProps {
  id: number;
  content: string;
  user: {
    image: {
      png: string;
    };
    username: string;
  };
  score: number;
  createdAt: string;
  replies?: [
    {
      id: number;
      content: string;
      createdAt: string;
      score: number;
      replyingTo: string;
      user: {
        image: {
          png: string;
        };
      };
      username: string;
    }
  ];
}

const Comment = (props: CommentProps) => {
  const [vote, setVote] = useState<number>(props.score);
  const [replying, setReplying] = useState(false);

  const voteUp = () => {
    setVote((lastVote) => lastVote + 1);
  };

  const voteDown = () => {
    setVote((lastVote) => lastVote - 1);
  };

  const replyHandler = () => {
    setReplying(!replying);
  };

  return (
    <>
      <CommentStyled key={props.id}>
        <div>
          <ScoreCounter voteUp={voteUp} voteDown={voteDown} vote={vote} />
        </div>
        <div>
          <UserStyled>
            <UserAvatar src={props.user.image.png} alt="UserAvatar" />
            <UserStyledName>{props.user.username}</UserStyledName>
            <UserStyledDate>{props.createdAt}</UserStyledDate>
            {props.user.username === 'juliusomo' ? (
              <>
                <CommentStyledDelete>
                  <CommentIconDeleteStyled src={IconDelete} alt="IconDelete" />
                  Delete
                </CommentStyledDelete>
                <CommentEditStyled>
                  <CommentIconEditStyled src={IconEdit} alt="Icon Edit" />
                  Edit
                </CommentEditStyled>
              </>
            ) : (
              <UserStyledReply onClick={replyHandler}>
                <IconReplyStyled src={IconReply} alt="IconReply" />
                Reply
              </UserStyledReply>
            )}
          </UserStyled>
          <p>{props.content}</p>
        </div>
      </CommentStyled>
      <CommentReply>{replying ? <NewComment /> : ''}</CommentReply>
    </>
  );
};

export default Comment;
