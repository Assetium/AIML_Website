/* import React from "react";

interface MediaContentPaginationProps {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
}

const MediaContentPagination: React.FC<MediaContentPaginationProps> = ({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  if (totalPages <= 1) return null;

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const renderPageNumbers = () => {
    return Array.from({ length: totalPages }, (_, index) => index + 1).map(
      (page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-3 py-1 border rounded ${
            page === currentPage
              ? "bg-[#c14511] text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          {page}
        </button>
      )
    );
  };

  return (
    <div className="flex items-center justify-center gap-2 mt-4">
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className="px-3 py-1 border rounded bg-gray-200 text-gray-700 disabled:opacity-50"
      >
        Previous
      </button>
      {renderPageNumbers()}
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="px-3 py-1 border rounded bg-gray-200 text-gray-700 disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default MediaContentPagination;
 */

import React from "react";

interface MediaContentPaginationProps {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
}

const MediaContentPagination: React.FC<MediaContentPaginationProps> = ({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  if (totalPages <= 1) return null; // No need to render pagination if only one page

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const renderPageNumbers = () => {
    return Array.from({ length: totalPages }, (_, index) => index + 1).map(
      (page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-2 py-1 text-xs border rounded ${
            page === currentPage
              ? "bg-[#C14511] text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          {page}
        </button>
      )
    );
  };

  return (
    <div className="flex items-center justify-center gap-2 mt-4">
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className="px-2 text-xs py-1 border rounded bg-gray-200 text-gray-700 disabled:opacity-50"
      >
        Previous
      </button>
      {renderPageNumbers()}
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="px-2 py-1 text-xs border rounded bg-gray-200 text-gray-700 disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default MediaContentPagination;
