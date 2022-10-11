import React, { ChangeEvent, useEffect, useState } from 'react';
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
  const [editText, setEditText] = useState('');
  const [ranNumb, setRanNumb] = useState(5);

  const addCommentHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setCommentText(e.target.value);
  };

  const setEditTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setEditText(e.target.value);
  };

  const time = new Date().toString().split(' ');
  const actuallDate = `${time[2]}` + ' ' + `${time[1]}` + ' ' + `${time[3]}`;

  const newComment = {
    id: ranNumb,
    key: ranNumb,
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
            if (comment.id === newComment.key) {
              return {
                ...comment,
                content: editText,
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

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { customAlphabet } = require('nanoid');
    const randomNum = customAlphabet('1234567890', 2);
    setRanNumb(randomNum());
  }, [addNewComment]);

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
          editCommentText={setEditTextHandler}
          editCommentUpdate={editCommentUpdate}
          editText={editText}
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
    <>
      <CommentListStyled>
        {comments}
        <NewComment
          addNewComment={addNewComment}
          newCommentText={commentText}
          newCommentHandler={addCommentHandler}
        />
      </CommentListStyled>
    </>
  );
};

export default CommentList;
