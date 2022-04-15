// import { useState } from "react" 
// import { Footer } from "../Footer/Footer"
import { ShowCaseItem } from "../ShowCaseItem/ShowCaseItem"            
import {ContainerShowcase } from './showcaseStyled'
 
export const ShowCase = (props) => {   
  if(props.loading) {
    <h2>Loading....</h2>
  } 

  const saveFavorities = () => {
    console.log("first");
  }
    return (
      <ContainerShowcase>        
        <div className="">  
            <div className="main">   
                <ul className="cards">  
                  {
                    props.products?.map((products) => {
                        return (
                          <ShowCaseItem key={products._id} {...products} saveFavorities={() => saveFavorities()} {...props}></ShowCaseItem>
                        )
                    })
                  }
                </ul> 
            </div>
        </div>
      </ContainerShowcase>
    )
 }