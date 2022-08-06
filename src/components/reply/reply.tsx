import React, { ChangeEvent, useState } from 'react';
import {
  IconDeleteStyled,
  IconEditStyled,
  ReplyButtonWrapper,
  ReplyEditStyled,
  ReplyHeader,
  ReplyHeaderAvatar,
  ReplyHeaderDate,
  ReplyHeaderYou,
  ReplyInputEdit,
  ReplyNameStyled,
  ReplyStyled,
  ReplyStyledDelete,
  ReplyWrapper,
} from './reply.styled';
import Avatar from '../../assets/avatars/image-juliusomo.png';
import ScoreCounter from '../scoreCounter/scoreCounter';
import IconDelete from '../../assets/icons/icon-delete.svg';
import IconEdit from '../../assets/icons/icon-edit.svg';
import Button from '../button/button';

const Reply = () => {
  const [initialScore, setInitialScore] = useState(0);
  const [reply, setReply] = useState('');
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
              <ReplyHeaderAvatar src={Avatar} alt="Current User" />
              <ReplyNameStyled>juliusomo</ReplyNameStyled>
              <ReplyHeaderYou>you</ReplyHeaderYou>
              <ReplyHeaderDate>2 days ago</ReplyHeaderDate>
              <ReplyStyledDelete>
                <IconDeleteStyled src={IconDelete} alt="Icon Delete" />
                Delete
              </ReplyStyledDelete>
              <ReplyEditStyled onClick={changeEdit}>
                <IconEditStyled src={IconEdit} alt="Icon Edit" />
                Edit
              </ReplyEditStyled>
            </ReplyHeader>
            {editing ? (
              <p>{reply}</p>
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
