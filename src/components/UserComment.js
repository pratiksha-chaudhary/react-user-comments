import React from "react";

function UserComment({ comment }) {
  return (
    <div className="user-comment">
      <div className="user-comment-header">
        <div className="user-comment-name">
          <b>{comment.name}</b>
        </div>
        <div className="user-comment-email small-font">{comment.email}</div>
      </div>
      <div className="user-comment-body">{comment.body}</div>
    </div>
  );
}

export default UserComment;
