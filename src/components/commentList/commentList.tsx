import React, { useState } from 'react';
import Comment from '../comment/comment';
import NewComment from '../newComment/newComment';
import { CommentListStyled } from './commentList.styled';
import dataJSON from '../../data.json';

interface Comment {
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
  replies: {
    id: number;
    content: string;
    createdAt: string;
    score: number;
    replyingTo: string;
    user: {
      image: {
        png: string;
      };
      username: string;
    };
  }[];
}

const CommentList = () => {
  const [data, setData] = useState(dataJSON);

  const dataREPLY = data.comments[1].replies;

  const mappedData = data.comments.map(
    ({ content, id, user, score, createdAt }) => (
      <div key={id}>
        <Comment
          content={content}
          id={id}
          user={user}
          score={score}
          createdAt={createdAt}
        />
      </div>
    )
  );

  return (
    <CommentListStyled>
      {mappedData}
      <NewComment />
    </CommentListStyled>
  );
};

export default CommentList;
