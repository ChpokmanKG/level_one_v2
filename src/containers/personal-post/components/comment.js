import React from 'react';
import Avatar from '../../../components/avatar';

function Comment(props) {
  return (
    <div className="posts__comment-wrap all-center">
      <Avatar />
      <div className="posts__comment-name-wrap all-center">
        <strong>{props.email}</strong>
        <h4>{props.name}</h4>
        
        <p>{props.body}</p>
      </div>
    </div>
  )
}

export default Comment;