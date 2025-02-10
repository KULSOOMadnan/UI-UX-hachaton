import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
} from "@/components/ui/pagination";

interface PaginationUiProps {
  totalProducts: number;
  productsPerPage: number;
  paginate: (pageNumber: number) => void;
  currentPage: number;
}

function PaginationUi({
  totalProducts,
  productsPerPage,
  paginate,
  currentPage,
}: PaginationUiProps) {
  const pageNumbers = [];

  // Calculate total pages
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <Pagination>
      <PaginationContent>
        <div className="gap-4 flex">
          {pageNumbers.map((number) => (
            <PaginationItem key={number}>
              <PaginationLink
                onClick={() => paginate(number)}
                isActive={number === currentPage}
              >
                {number}
              </PaginationLink>
            </PaginationItem>
          ))}
        </div>
        <div>
          <PaginationItem>
            {currentPage < totalPages ? (
              <PaginationNext
                href="#"
                onClick={() => paginate(currentPage + 1)}
              />
            ) : (
              <span
                className="pagination-next-disabled px-5 py-3   bg-[#F9F1E7] text-gray-400  cursor-not-allowed"
                // Add styling to indicate disabled state
              >
                Next
              </span>
            )}
          </PaginationItem>
        </div>
      </PaginationContent>
    </Pagination>
  );
}

export default PaginationUi;
