import React, { useState } from 'react';
import {
  IconDeleteStyled,
  IconEditStyled,
  IconReplyStyled,
  ReplyButtonWrapper,
  ReplyEditStyled,
  ReplyHeader,
  ReplyHeaderAvatar,
  ReplyHeaderDate,
  ReplyInputEdit,
  ReplyNameStyled,
  ReplyReply,
  ReplyReplyStyled,
  ReplyStyled,
  ReplyStyledDelete,
  ReplyWrapper,
} from './reply.styled';
import ScoreCounter from '../scoreCounter/scoreCounter';
import IconDelete from '../../assets/icons/icon-delete.svg';
import IconEdit from '../../assets/icons/icon-edit.svg';
import IconReply from '../../assets/icons/icon-reply.svg';
import Button from '../button/button';
import NewComment from '../newComment/newComment';

interface ReplyProps {
  score: number;
  content: string;
  createdAt: string;
  user: {
    image: {
      png: string;
    };
    username: string;
  };
}

const Reply = (props: ReplyProps): JSX.Element => {
  const [initialScore, setInitialScore] = useState(props.score);
  const [reply, setReply] = useState(props.content);
  const [replying, setReplying] = useState(false);
  const [editing, setEditing] = useState(true);

  const voteUp = () => {
    setInitialScore((lastVote) => lastVote + 1);
  };

  const voteDown = () => {
    setInitialScore((lastVote) => lastVote - 1);
  };

  const changeEdit = () => {
    setEditing(!editing);
  };
  const editChangeHandler = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setReply(e.target.value);
  };

  const replyingHandler = () => {
    setReplying(!replying);
  };

  return (
    <>
      <ReplyWrapper>
        <ReplyStyled>
          <div>
            <ScoreCounter
              voteUp={voteUp}
              voteDown={voteDown}
              vote={initialScore}
            />
          </div>
          <div>
            <ReplyHeader>
              <ReplyHeaderAvatar
                src={props.user.image.png}
                alt="Current User"
              />
              <ReplyNameStyled>{props.user.username}</ReplyNameStyled>
              <ReplyHeaderDate>{props.createdAt}</ReplyHeaderDate>
              {props.user.username === 'juliusomo' ? (
                <ReplyStyledDelete>
                  <IconDeleteStyled src={IconDelete} alt="Icon Delete" />
                  Delete
                </ReplyStyledDelete>
              ) : (
                ''
              )}
              {props.user.username === 'juliusomo' ? (
                <ReplyEditStyled onClick={changeEdit}>
                  <IconEditStyled src={IconEdit} alt="Icon Edit" />
                  Edit
                </ReplyEditStyled>
              ) : (
                <ReplyReplyStyled onClick={replyingHandler}>
                  <IconReplyStyled src={IconReply} alt="Reply" />
                  Reply
                </ReplyReplyStyled>
              )}
            </ReplyHeader>
            {editing ? (
              <p>{props.content}</p>
            ) : (
              <ReplyInputEdit>
                <textarea
                  rows={4}
                  cols={62}
                  placeholder={reply}
                  value={reply}
                  onChange={editChangeHandler}
                >
                  {reply}
                </textarea>
                <ReplyButtonWrapper>
                  <Button button={'UPDATE'} onClick={changeEdit} />
                </ReplyButtonWrapper>
              </ReplyInputEdit>
            )}
          </div>
        </ReplyStyled>
      </ReplyWrapper>
      <ReplyReply>{replying ? <NewComment isReply={false} /> : ''}</ReplyReply>
    </>
  );
};

export default Reply;
