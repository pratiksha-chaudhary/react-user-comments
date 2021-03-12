import React from "react";
import CommentSection from "./CommentSection";

function CommentsPage() {
  return (
    <div className="comments-app">
      <div className="comments-app-header">
        <div className="comments-header">Comments</div>
        <div className="create-comment">Create comment</div>
      </div>
      <CommentSection />
    </div>
  );
}

export default CommentsPage;
