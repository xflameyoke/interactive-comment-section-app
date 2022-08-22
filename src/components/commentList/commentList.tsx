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

  const addCommentHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setCommentText(e.target.value);
  };

  const randomId = Math.floor(Math.random() * 1) + 5;
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

  const editCommentUpdate = () => {
    setData((prevData) => {
      return {
        ...prevData,
        comments: [
          ...prevData.comments.map((comment) => {
            if (comment.id === comment.id) {
              return {
                ...comment,
                content: commentText,
              };
            } else {
              return {
                ...comment,
              };
            }
          }),
        ],
      };
    });
  };

  const comments = data.comments.map((comment) => {
    return (
      <React.Fragment key={comment.id}>
        <Comment
          key={comment.id}
          id={comment.id}
          content={comment.content}
          user={comment.user}
          score={comment.score}
          createdAt={comment.createdAt}
          editComment={editCommentUpdate}
          editCommentText={addCommentHandler}
          editText={commentText}
        />

        {comment.replies.length >= 1 ? (
          <>
            {comment.replies.map((reply) => {
              return (
                <React.Fragment key={reply.id}>
                  <Reply
                    key={reply.id}
                    id={reply.id}
                    score={reply.score}
                    user={reply.user}
                    createdAt={reply.createdAt}
                    content={reply.content}
                  />
                </React.Fragment>
              );
            })}
          </>
        ) : (
          ''
        )}
      </React.Fragment>
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
