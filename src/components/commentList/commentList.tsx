import React, { ChangeEvent, useState } from 'react';
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
  const [commentText, setCommentText] = useState('');

  const addCommentHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setCommentText(e.target.value);
  };

  const randomId = Math.floor(Math.random() * 100) + 1;
  const time = new Date().toString().split(' ');
  const actuallDate = `${time[2]}` + ' ' + `${time[1]}` + ' ' + `${time[3]}`;

  const newComment = {
    id: randomId,
    content: commentText,
    createdAt: actuallDate,
    score: 0,
    user: {
      image: {
        png: './avatars/image-juliusomo.png',
      },
      username: 'juliusomo',
    },
    replies: [],
  };

  const addNewComment = () => {
    setData((prevData) => {
      return {
        ...prevData,
        comments: [...prevData.comments, newComment],
      };
    });
  };

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
      <NewComment
        addNewComment={addNewComment}
        newCommentText={commentText}
        newCommentHandler={addCommentHandler}
      />
    </CommentListStyled>
  );
};

export default CommentList;
