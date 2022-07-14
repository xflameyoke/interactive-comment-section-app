import React from 'react';
import data from '../../data.json';

const Comment = () => {
  const mapData = Object.values(data.comments).map((value) => (
    <div key={value.id}>
      <div>
        <img src={value.user.image.png} alt="comment_avatar" />
        {value.content}
      </div>
    </div>
  ));

  return <>{mapData}</>;
};

export default Comment;
