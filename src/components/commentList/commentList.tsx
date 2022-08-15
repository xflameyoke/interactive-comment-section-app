import React, { useState } from 'react';
import Comment from '../comment/comment';
import NewComment from '../newComment/newComment';
import { CommentListStyled } from './commentList.styled';
import dataJSON from '../../data.json';
import Reply from '../reply/reply';

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

  const comments = data.comments.map((comment) => {
    return (
      <>
        <Comment
          id={comment.id}
          content={comment.content}
          user={comment.user}
          score={comment.score}
          createdAt={comment.createdAt}
        />
        {comment.replies.length >= 1 ? (
          <>
            {comment.replies.map((reply) => {
              return (
                <>
                  <Reply
                    score={reply.score}
                    user={reply.user}
                    createdAt={reply.createdAt}
                    content={reply.content}
                  />
                </>
              );
            })}
          </>
        ) : (
          ''
        )}
      </>
    );
  });
  return (
    <CommentListStyled>
      {comments}
      <NewComment />
    </CommentListStyled>
  );
};

export default CommentList;
