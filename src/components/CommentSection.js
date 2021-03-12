import React, { useEffect, useState } from "react";
import UserComment from "./UserComment";

function CommentSection() {
  const [isWaitingForResponse, setIsWaitingForResponse] = useState(false);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    setIsWaitingForResponse(true);
    const apiUrl = `https://jsonplaceholder.typicode.com/comments`;
    fetch(apiUrl)
      .then((response) => response.json())
      .then((userComments) => {
        setIsWaitingForResponse(false);
        setComments(userComments);
      });
  }, []);
  const commentElementsList = [];
  for (let i = 0; i < comments.length; i++) {
    const commentElement = <UserComment key={i} comment={comments[i]} />;
    commentElementsList.push(commentElement);
  }
  return <div className="user-comment-list">{commentElementsList}</div>;
}

export default CommentSection;
