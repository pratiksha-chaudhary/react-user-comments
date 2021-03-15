import React, { useEffect, useState } from "react";

function Pagination({ currentPage, setCurrentPage, commentsCount }) {
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(startIndex + 9);
  const totalPageCount = Math.ceil(commentsCount / 12);

  useEffect(() => {
    /* endIndex would always be (startIndex + 9) until 
      (startIndex+ 9) becomes greater than totalPageCount
      which is the max page number we want to show */
    const updatedEndIndex = Math.min(startIndex + 9, totalPageCount - 1);
    setEndIndex(updatedEndIndex);
  }, [startIndex, totalPageCount]);

  // This effect updates start index whenever current page is updated
  useEffect(() => {
    // we do not want to increase start index beyond (totalPageCount - 4)
    const MAX_START_PAGE_INDEX_VALUE = totalPageCount - 4;

    if (startIndex < MAX_START_PAGE_INDEX_VALUE) {
      /* when user's selected page is just before ellipsis and
        he selects next page on right */
      if (currentPage - startIndex === 3) {
        setStartIndex((i) => i + 1);
      }

      /* When user's selected page is last on pagination bar and 
        he selects next page on right */
      if (currentPage - startIndex > 9) {
        setStartIndex((i) => i + 1);
      }
    }

    /* When user is browsing pages on the left of the current page
        and his selected page is left of start page index */
    if (currentPage - startIndex < 0) {
      setStartIndex((i) => i - 1);
    }
  }, [currentPage]);

  const setPageIndex = (expectedPageIndex) => {
    /* To ensure user selects page number in a valid
      range i.e. 0 and max page count */
    if (expectedPageIndex >= 0 && expectedPageIndex < totalPageCount) {
      setCurrentPage(expectedPageIndex);
    }
  };

  const movePageIndex = (moveType) => {
    if (moveType === -1) {
      // To avoid user from going into negative page number
      if (currentPage > 0) {
        setCurrentPage((i) => i - 1);
      }
    }
    if (moveType === 1) {
      // To avoid user to move beyond total no of pages
      if (currentPage < totalPageCount - 1) {
        setCurrentPage((i) => i + 1);
      }
    }
  };

  return (
    <div className="pagination">
      <div className="page-number">
        <div className="page-number-content" onClick={() => movePageIndex(-1)}>
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
      <div className="page-number pagination-ellipses-spacing">
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
        <div className="page-number-content" onClick={() => movePageIndex(1)}>
          &gt;
        </div>
      </div>
    </div>
  );
}

export default Pagination;
