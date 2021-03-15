import React, { useEffect, useState } from "react";

function Pagination({ currentPage, setCurrentPage, commentsCount }) {
  const [startPageIndex, setStartPageIndex] = useState(0);
  const expectedPageCount = Math.ceil(commentsCount / 12);
  const endPageIndex =
    startPageIndex + 10 <= expectedPageCount
      ? startPageIndex + 10
      : expectedPageCount;
  useEffect(() => {
    // If user selects last page on pagination
    // if (currentPage - startPageIndex === 9) {
    //   setStartPageIndex(currentPage);
    // }

    /* If user increments page number and reaches for eg page 4
     which is not visible as we show ellipsis instead */
    if (currentPage - startPageIndex === 3) {
      setStartPageIndex(startPageIndex + 1);
    }

    // if (currentPage - startPageIndex > 3 && currentPage - startPageIndex < 9) {
    //   setStartPageIndex(endPageIndex - 1);
    // }
    if (currentPage - startPageIndex < 0) {
      setStartPageIndex(startPageIndex - 1);
    }
  }, [currentPage]);

  const setPageIndex = (expectedPageIndex) => {
    if (expectedPageIndex >= 0 && expectedPageIndex < expectedPageCount) {
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
          currentPage - startPageIndex === 0 ? "active" : ""
        }`}
        onClick={() => setPageIndex(startPageIndex)}
      >
        <div className="page-number-content">{startPageIndex + 1}</div>
      </div>
      <div
        className={`page-number ${
          currentPage - startPageIndex === 1 ? "active" : ""
        }`}
        onClick={() => setPageIndex(startPageIndex + 1)}
      >
        <div className="page-number-content">{startPageIndex + 2}</div>
      </div>
      <div
        className={`page-number ${
          currentPage - startPageIndex === 2 ? "active" : ""
        }`}
        onClick={() => setPageIndex(startPageIndex + 2)}
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
        className={`page-number ${
          endPageIndex - currentPage === 1 ? "active" : ""
        }`}
        onClick={() => setPageIndex(endPageIndex - 1)}
      >
        <div className="page-number-content">{endPageIndex}</div>
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
