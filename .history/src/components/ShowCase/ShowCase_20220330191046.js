import { useState } from "react" 
import { Footer } from "../Footer/Footer"
import { ShowCaseItem } from "../ShowCaseItem/ShowCaseItem"            
 
export const ShowCase = (props) => {   
    if(props.loading) {
        <h2>Loading....</h2>
    } 
    
     return (
         <>        
            <div className="container page-wrapper">  
                <div className="main">   
                    <ul className="cards">  
                      {
                        props.products?.map((products) => {
                            return (
                                <>
                                  <ShowCaseItem key={products._id} {...products}></ShowCaseItem>
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