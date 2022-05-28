import React from "react";
import "./../Pagination/Pagination.css";

 
export const Pagination = ({productPerPage, totalProducts, paginate }) => { 
    const pageNumbers = [];     
    for(let i = 1; i <= Math.ceil(totalProducts / productPerPage); i++) {
          pageNumbers.push(i)
    }
    return (
      <>  
        <ul className="pagination"> 
          {pageNumbers?.map((number) => { 
            return (
              <li key={number} className="page-item"> 
              <button  onClick={() => paginate(number)} href="#" className="page-link">
                  {number}
              </button>
              </li>
            )
          })}
        </ul>
      </>
     )
}
