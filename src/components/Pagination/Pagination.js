import React from "react" 

 
export const Pagination = ({productPerPage, totalProducts }) => { 
   
 

    console.log(productPerPage, totalProducts)

     const pageNumbers = [];    


   for(let i = 1; i <= Math.ceil(totalProducts / productPerPage); i++) {
        pageNumbers.push(i)
   }
      
     return (
         <>   
         <nav>
             <ul className="pagination"> 
             {pageNumbers?.map((number) => { 
                 return (
                    <li key={number} className="page-item"> 
                    <a href="!#" className="page-link">
                        {number}
                    </a>
                    </li>
                 )
             })}

             </ul>
         </nav>

         </>
     )
}