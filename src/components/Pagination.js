import React, { useState } from "react";

function Pagination({ currentPageIndex, setCurrentPageIndex }) {
  const [startPaginationIndex, setStartPaginationIndex] = useState(0);

  const setPageIndex = (expectedPageIndex) => {
    setCurrentPageIndex(expectedPageIndex);

    if (expectedPageIndex - startPaginationIndex === 2) {
      setStartPaginationIndex((p) => p + 1);
    }

    if (expectedPageIndex - startPaginationIndex > 2) {
      setStartPaginationIndex(expectedPageIndex);
    }
  };

  const setStartPageIndex = (increment) => {
    if (increment === -1) {
      // This means this is first page of comments and we can't go further back
      if (currentPageIndex > 0) {
        setCurrentPageIndex(currentPageIndex - 1);
      }

      // Update start pagination index if current page index has reached the start
      if (currentPageIndex > 0 && currentPageIndex <= startPaginationIndex) {
        setStartPaginationIndex((p) => p - 1);
      }
    }
  };

  return (
    <div className="pagination">
      <div className="page-number">
        <div
          className="page-number-content"
          onClick={() => setStartPageIndex(-1)}
        >
          &lt;
        </div>
      </div>
      <div
        className={`page-number ${
          currentPageIndex - startPaginationIndex === 0
            ? "pagination-circle"
            : ""
        }`}
        onClick={() => setPageIndex(currentPageIndex)}
      >
        <div className="page-number-content">{startPaginationIndex + 1}</div>
      </div>
      <div
        className={`page-number ${
          currentPageIndex - startPaginationIndex === 1
            ? "pagination-circle"
            : ""
        }`}
        onClick={() => setPageIndex(currentPageIndex + 1)}
      >
        <div className="page-number-content">{startPaginationIndex + 2}</div>
      </div>
      <div
        className={`page-number ${
          currentPageIndex - startPaginationIndex === 2
            ? "pagination-circle"
            : ""
        }`}
        onClick={() => setPageIndex(currentPageIndex + 2)}
      >
        <div className="page-number-content">{startPaginationIndex + 3}</div>
      </div>
      <div
        className="page-number pagination-ellipses-spacing"
        onClick={() => {}}
      >
        <div className="page-number-content">...</div>
      </div>
      <div
        className="page-number"
        onClick={() => setPageIndex(currentPageIndex + 9)}
      >
        <div className="page-number-content">{startPaginationIndex + 10}</div>
      </div>
      <div className="page-number">
        <div
          className="page-number-content"
          onClick={() => setPageIndex(currentPageIndex + 1)}
        >
          &gt;
        </div>
      </div>
    </div>
  );
}

export default Pagination;
