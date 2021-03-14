import React, { useEffect, useState } from "react";
import UserComment from "./UserComment";
import Pagination from "./Pagination";

function CommentSection() {
  const [isWaitingForResponse, setIsWaitingForResponse] = useState(false);
  const [comments, setComments] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

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
  for (let i = 0; i < 12 && comments.length > 0; i++) {
    const commentElement = (
      <UserComment key={i} comment={comments[currentPage * 12 + i]} />
    );
    commentElementsList.push(commentElement);
  }

  return (
    <>
      {isWaitingForResponse && <div>Loading............</div>}
      <div className="user-comment-list">{commentElementsList}</div>
      {!isWaitingForResponse && (
        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
      )}
    </>
  );
}

export default CommentSection;
