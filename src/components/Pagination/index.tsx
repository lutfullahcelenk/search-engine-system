/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

type IPaginaton = {
  paginate: any;
  output: any;
  rowPerPage: number;
  currentPage: number;
};

const Pagination = ({
  paginate,
  output,
  rowPerPage,
  currentPage,
}: IPaginaton) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(output.length / rowPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className="flex justify-center mt-12">
      <li>
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1 ? true : false}
          className="block px-6 py-2 mx-1 bg-white border border-gray-300 rounded-lg cursor-pointer hover:bg-hoverBlue"
        >
          Previous
        </button>
      </li>

      {pageNumbers.map((number) => (
        <li key={number}>
          <button
            onClick={() => paginate(number)}
            className={`hidden lg:block px-3 py-2 mx-1 hover:bg-hoverBlue ${
              number === currentPage ? "bg-darkBlue text-white" : "bg-white"
            }  border border-gray-300 rounded-lg `}
          >
            {number}
          </button>
        </li>
      ))}

      <li>
        <button
          disabled={
            currentPage === pageNumbers[pageNumbers.length - 1] ? true : false
          }
          onClick={() => paginate(currentPage + 1)}
          className="block w-24 px-6 py-2 mx-1 bg-white border border-gray-300 rounded-lg cursor-pointer hover:bg-hoverBlue"
        >
          Next
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
