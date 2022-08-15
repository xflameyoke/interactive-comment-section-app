import React, { ChangeEvent, useState } from 'react';
import {
  IconDeleteStyled,
  IconEditStyled,
  ReplyButtonWrapper,
  ReplyEditStyled,
  ReplyHeader,
  ReplyHeaderAvatar,
  ReplyHeaderDate,
  ReplyInputEdit,
  ReplyNameStyled,
  ReplyStyled,
  ReplyStyledDelete,
  ReplyWrapper,
} from './reply.styled';
import ScoreCounter from '../scoreCounter/scoreCounter';
import IconDelete from '../../assets/icons/icon-delete.svg';
import IconEdit from '../../assets/icons/icon-edit.svg';
import Button from '../button/button';

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

const Reply = (props: ReplyProps) => {
  const [initialScore, setInitialScore] = useState(props.score);
  const [reply, setReply] = useState(props.content);
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
  const editChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setReply(e.target.value);
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
                ''
              )}
            </ReplyHeader>
            {editing ? (
              <p>{props.content}</p>
            ) : (
              <ReplyInputEdit>
                <input
                  onChange={editChangeHandler}
                  value={reply}
                  placeholder={reply}
                />
                <ReplyButtonWrapper>
                  <Button button={'UPDATE'} onClick={changeEdit} />
                </ReplyButtonWrapper>
              </ReplyInputEdit>
            )}
          </div>
        </ReplyStyled>
      </ReplyWrapper>
    </>
  );
};

export default Reply;
