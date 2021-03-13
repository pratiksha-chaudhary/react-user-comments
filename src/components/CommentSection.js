import React, { useEffect, useState } from "react";
import UserComment from "./UserComment";
import Pagination from "./Pagination";

function CommentSection() {
  const [isWaitingForResponse, setIsWaitingForResponse] = useState(false);
  const [comments, setComments] = useState([]);
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

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
  let isSmallCommentBox = true;
  let currentRowMemberCount = 0;
  for (let i = 0; i < 12 && comments.length > 0; i++) {
    currentRowMemberCount++;
    let isNextCommentBoxSmall;
    if (
      (isSmallCommentBox && currentRowMemberCount === 4) ||
      (!isSmallCommentBox && currentRowMemberCount === 2)
    ) {
      isNextCommentBoxSmall = !isSmallCommentBox;
      currentRowMemberCount = 0;
    }
    const commentElement = (
      <UserComment
        key={i}
        id={currentPageIndex * 12 + i}
        comment={comments[currentPageIndex * 12 + i]}
        isSmallCommentBox={isSmallCommentBox}
      />
    );
    isSmallCommentBox =
      currentRowMemberCount === 0 ? isNextCommentBoxSmall : isSmallCommentBox;
    commentElementsList.push(commentElement);
  }

  return (
    <>
      {isWaitingForResponse && <div>Loading............</div>}
      <div className="user-comment-list">{commentElementsList}</div>
      {!isWaitingForResponse && <Pagination currentPageIndex={currentPageIndex} setCurrentPageIndex={setCurrentPageIndex}/>}
    </>
  );
}

export default CommentSection;
