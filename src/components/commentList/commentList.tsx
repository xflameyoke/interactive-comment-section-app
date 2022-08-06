import React, { useEffect, useState } from 'react';
import Comment from '../comment/comment';
import AddComment from '../addComment/addComment';
import { CommentListStyled } from './commentList.styled';

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
  replies: [
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

const CommentList = () => {
  const [commentData, setCommentData] = useState<Array<Comment>>([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch('./data.json');
      const data = await response.json();
      setCommentData(data.comments);
    };

    getData();
  }, []);

  const mappedData = commentData.map(
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
      <AddComment />
    </CommentListStyled>
  );
};

export default CommentList;
