import React from "react";
import "./estilos/Pagination.css";

const Pagination = ({ postPerPage, totalPosts, paginate }) => {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumber.push(i);
  }
  console.log(pageNumber);

  return (
    <nav>
      <div className="pagination-container">
        {pageNumber.map((number) => (
          <div className="numbers-container" key={number}>
            <button className="numbers" onClick={() => paginate(number)}>
              {number}
            </button>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Pagination;
