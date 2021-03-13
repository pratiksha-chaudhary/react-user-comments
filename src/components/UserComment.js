import React from "react";

function UserComment({ comment, isSmallCommentBox, id }) {
  const commentClassName = `user-comment ${isSmallCommentBox ? "" : "large-comment-box"}`
  return (
    <div className={commentClassName}>
      <div className="user-comment-header">
        <div className="user-comment-name">
          <b>{id} {comment.name}</b>
        </div>
        <div className="user-comment-email small-font">{comment.email}</div>
      </div>
      <div className="user-comment-body">{comment.body}</div>
    </div>
  );
}

export default UserComment;
