import { useState } from "react" 
import { Footer } from "../Footer/Footer"
import { ShowCaseItem } from "../ShowCaseItem/ShowCaseItem"            



 
 export const ShowCase = (props) => {   



      
    console.log(props) 

    if(props.loading) {
        <h2>Loading....</h2>
    } 
    
     return (
         <>        
         <div class="container page-wrapper">  
         <div class="main">   
         <ul class="cards">  

         {
             props.products?.map((products) => {
                 return (
                  <>
        <ShowCaseItem {...products}></ShowCaseItem>
        </>
                 )
             })
         } 
         </ul> 
         </div>   

         </div>  
         </> 

     )
 }