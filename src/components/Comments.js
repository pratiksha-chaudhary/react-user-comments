import React from "react";
import UserComments from "./UserComments";

function Comments() {
  return (
    <div className="comments-app">
      <div className="comments-app-header">
        <div className="comments-header">Comments</div>
        <div className="create-comment">Create comment</div>
      </div>
      <UserComments />
    </div>
  );
}

export default Comments;
