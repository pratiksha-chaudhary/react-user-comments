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
    if (currentPage !== totalPageCount - 1) {
      setStartIndex(currentPage);
    }
  }, [currentPage]);

  const setPageIndex = (expectedPageIndex) => {
    if (expectedPageIndex >= 0 && expectedPageIndex < totalPageCount) {
      setCurrentPage(expectedPageIndex);
    }
  };

  return (
    <div className="pagination">
      <div className="page-number">
        <div
          className="page-number-content"
          onClick={() => setPageIndex(currentPage - 1)}
        >
          &lt;
        </div>
      </div>
      <div
        className={`page-number ${
          currentPage - startIndex === 0 ? "active" : ""
        }`}
        onClick={() => setPageIndex(currentPage)}
      >
        <div className="page-number-content">{startIndex + 1}</div>
      </div>
      <div
        className={`page-number ${
          currentPage - startIndex === 1 ? "active" : ""
        }`}
        onClick={() => setPageIndex(currentPage + 1)}
      >
        <div className="page-number-content">{startIndex + 2}</div>
      </div>
      <div
        className={`page-number ${
          currentPage - startIndex === 2 ? "active" : ""
        }`}
        onClick={() => setPageIndex(currentPage + 2)}
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

      {totalPageCount - endIndex !== 1 && (
        <div className="page-number">
          <div
            className="page-number-content"
            onClick={() => setPageIndex(currentPage + 1)}
          >
            &gt;
          </div>
        </div>
      )}
    </div>
  );
}

export default Pagination;
