import React from 'react';
import data from '../../data.json';
import Comment from '../comment/comment';
import { CommentListStyled } from './commentList.styled';

const CommentList = () => {
  const mappedData = Object.values(data.comments).map(
    ({ id, content, user, score, createdAt }) => (
      <CommentListStyled>
        <Comment
          content={content}
          id={id}
          user={user}
          score={score}
          createdAt={createdAt}
        />
      </CommentListStyled>
    )
  );

  return <>{mappedData}</>;
};

export default CommentList;
