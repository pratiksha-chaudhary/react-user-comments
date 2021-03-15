import React, { useEffect, useState } from "react";

function Pagination({ currentPage, setCurrentPage, commentsCount }) {
  const [startIndex, setStartIndex] = useState(0);
  const totalPageCount = Math.ceil(commentsCount / 12);
  let endIndex;
  if (startIndex + 9 < totalPageCount) {
    endIndex = startIndex + 9;
  } else {
    endIndex = totalPageCount - 1;
  }

  // This effect updates start index whenever current page is updated
  useEffect(() => {
    if (startIndex < 38) {
      if (currentPage - startIndex === 3) {
        setStartIndex((i) => i + 1);
      }
      if (currentPage - startIndex > 9) {
        setStartIndex((i) => i + 1);
      }
      if (endIndex - startIndex < 9 && currentPage - startIndex > 3) {
        setStartIndex((i) => i + 1);
      }
    }

    if (currentPage - startIndex < 0) {
      setStartIndex((i) => i - 1);
    }
  }, [currentPage]);

  const setPageIndex = (expectedPageIndex) => {
    if (expectedPageIndex >= 0 && expectedPageIndex < totalPageCount) {
      setCurrentPage(expectedPageIndex);
    }
  };

  const movePageIndexes = (moveType) => {
    if (moveType === -1) {
      if (currentPage > 0) {
        setCurrentPage((i) => i - 1);
      }

      if (endIndex - startIndex <= 9 && startIndex > 0) {
        setStartIndex((i) => i - 1);
      }
    }
    if (moveType === 1) {
      if (currentPage < totalPageCount - 1) {
        setCurrentPage((i) => i + 1);
      }
    }
  };

  return (
    <div className="pagination">
      <div className="page-number">
        <div
          className="page-number-content"
          onClick={() => movePageIndexes(-1)}
        >
          &lt;
        </div>
      </div>
      <div
        className={`page-number ${
          currentPage - startIndex === 0 ? "active" : ""
        }`}
        onClick={() => setPageIndex(startIndex)}
      >
        <div className="page-number-content">{startIndex + 1}</div>
      </div>
      <div
        className={`page-number ${
          currentPage - startIndex === 1 ? "active" : ""
        }`}
        onClick={() => setPageIndex(startIndex + 1)}
      >
        <div className="page-number-content">{startIndex + 2}</div>
      </div>
      <div
        className={`page-number ${
          currentPage - startIndex === 2 ? "active" : ""
        }`}
        onClick={() => setPageIndex(startIndex + 2)}
      >
        <div className="page-number-content">{startIndex + 3}</div>
      </div>
      <div
        className="page-number pagination-ellipses-spacing"
        onClick={() => {}}
      >
        <div className="page-number-content">...</div>
      </div>
      <div
        className={`page-number ${
          currentPage - endIndex === 0 ? "active" : ""
        }`}
        onClick={() => setPageIndex(endIndex)}
      >
        <div className="page-number-content">{endIndex + 1}</div>
      </div>

      <div className="page-number">
        <div className="page-number-content" onClick={() => movePageIndexes(1)}>
          &gt;
        </div>
      </div>
    </div>
  );
}

export default Pagination;
