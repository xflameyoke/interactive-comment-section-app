import React, { useEffect, useState } from 'react';
import Comment from '../comment/comment';
import AddComment from '../addComment/addComment';
import { CommentListStyled } from './commentList.styled';
import Reply from '../reply/reply';

interface Comment {
  id: number;
  content: string;
  createdAt: number;
  score: number;
  username: string;
  currentUser: boolean;
  replies: [];
}

const CommentList = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch('./data.json');
      const data = await response.json();
      setComments(data.comments);
    };

    getData();
  }, []);

  const mappedData = comments.map(({ id, content, user, score, createdAt }) => (
    <div key={id}>
      <Comment
        content={content}
        id={id}
        user={user}
        score={score}
        createdAt={createdAt}
      />
    </div>
  ));

  return (
    <CommentListStyled>
      {mappedData}
      <Reply />
      <AddComment />
    </CommentListStyled>
  );
};

export default CommentList;
