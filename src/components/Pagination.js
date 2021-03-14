import React, { useState } from "react";

function Pagination({ currentPage, setCurrentPage }) {
  const [startPageIndex, setStartPageIndex] = useState(0);

  const setPageIndex = (expectedPageIndex) => {
    setCurrentPage(expectedPageIndex);

    // To handle single increments
    if (expectedPageIndex - startPageIndex === 2) {
      setStartPageIndex((i) => i + 1);
    }

    // To handle scenario when user selects last page on pagination
    if (expectedPageIndex - startPageIndex > 2) {
      setStartPageIndex(expectedPageIndex);
    }
  };

  const updateStartPageIndex = (increment) => {
    if (increment === -1) {
      // This means this is first page of comments and we can't go further back
      if (currentPage > 0) {
        setCurrentPage((i) => i - 1);
      }

      // Update start pagination index if current page index has reached the start
      if (currentPage > 0 && currentPage <= startPageIndex) {
        setStartPageIndex((i) => i - 1);
      }
    }
  };

  return (
    <div className="pagination">
      <div className="page-number">
        <div
          className="page-number-content"
          onClick={() => updateStartPageIndex(-1)}
        >
          &lt;
        </div>
      </div>
      <div
        className={`page-number ${
          currentPage - startPageIndex === 0 ? "active" : ""
        }`}
        onClick={() => setPageIndex(currentPage)}
      >
        <div className="page-number-content">{startPageIndex + 1}</div>
      </div>
      <div
        className={`page-number ${
          currentPage - startPageIndex === 1 ? "active" : ""
        }`}
        onClick={() => setPageIndex(currentPage + 1)}
      >
        <div className="page-number-content">{startPageIndex + 2}</div>
      </div>
      <div
        className={`page-number ${
          currentPage - startPageIndex === 2 ? "active" : ""
        }`}
        onClick={() => setPageIndex(currentPage + 2)}
      >
        <div className="page-number-content">{startPageIndex + 3}</div>
      </div>
      <div
        className="page-number pagination-ellipses-spacing"
        onClick={() => {}}
      >
        <div className="page-number-content">...</div>
      </div>
      <div
        className="page-number"
        onClick={() => setPageIndex(currentPage + 9)}
      >
        <div className="page-number-content">{startPageIndex + 10}</div>
      </div>
      <div className="page-number">
        <div
          className="page-number-content"
          onClick={() => setPageIndex(currentPage + 1)}
        >
          &gt;
        </div>
      </div>
    </div>
  );
}

export default Pagination;
