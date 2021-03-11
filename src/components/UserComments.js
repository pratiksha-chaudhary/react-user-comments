import React, { useEffect, useState } from "react";

function UserComments() {
  const [isLoading, setIsLoading] = useState(false);
  const [comments, setComments] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    const apiUrl = `https://jsonplaceholder.typicode.com/comments`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((userComments) => {
        setIsLoading(false);
        setComments(userComments);
      });
  }, []);
  const commentsList = comments.map((comment, i) => (
    <div key={i}>{comment.body}</div>
  ));
  return <div style={{ display: "block" }}>{commentsList}</div>;
}

export default UserComments;
