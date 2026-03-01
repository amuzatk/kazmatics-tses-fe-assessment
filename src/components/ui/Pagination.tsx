// src/components/ui/Pagination.tsx
'use client';

import { Dispatch, SetStateAction } from 'react';
import Image from 'next/image';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  showItemsPerPage?: boolean;
}

export default function Pagination({
  currentPage,
  totalPages,
  setCurrentPage,
  showItemsPerPage = true,
}: PaginationProps) {
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
      return pages;
    }

    pages.push(1);

    if (currentPage > 3) pages.push('...');

    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (currentPage < totalPages - 2) pages.push('...');

    if (totalPages > 1) pages.push(totalPages);

    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4">
      {showItemsPerPage && (
        <button className="px-5 py-2.5 border border-[#E8E8E8] text-[#636363] text-[14px] rounded-full flex items-center justify-center gap-2 w-full sm:w-auto hover:bg-gray-50">
          Show 10/page
          <Image src="/icons/arrow-down.png" width={20} height={20} alt="down" />
        </button>
      )}

      <div className="flex items-center gap-3 justify-center sm:justify-end">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
          className={`
            text-[16px] transition-colors
            ${currentPage === 1
              ? 'text-[#8C8C8C] cursor-default'
              : 'text-[#0A60E1] cursor-pointer hover:underline'}
          `}
        >
          Prev
        </button>

        <div className="flex gap-2">
          {pageNumbers.map((page, idx) => {
            if (page === '...') {
              return (
                <span key={`ellipsis-${idx}`} className="flex items-center text-[#0A60E1]">
                  ...
                </span>
              );
            }

            const isActive = currentPage === page;

            return (
              <button
                key={page as number}
                onClick={() => setCurrentPage(Number(page))}
                className={`w-8 h-8 flex items-center justify-center text-[14px] rounded-full transition-colors ${
                  isActive
                    ? 'bg-[#0A60E1] text-white'
                    : 'bg-[#fdfdfd] border border-[#0A60E1] text-[#0A60E1] hover:bg-gray-50'
                }`}
              >
                {(page as number).toString().padStart(2, '0')}
              </button>
            );
          })}
        </div>

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((p) => p + 1)}
          className={`
            text-[16px] transition-colors
            ${currentPage === totalPages
              ? 'text-[#8C8C8C] cursor-default'
              : 'text-[#0A60E1] cursor-pointer hover:underline'}
          `}
        >
          Next
        </button>
      </div>
    </div>
  );
}