import React, { useState } from "react"
import "./ShowCaseItem.css"  
// import styled from 'styled-components' 
// import { Link } from 'react-router-dom'    

// const NavIcon = styled(Link)`
//   margin-left: 2rem; 
//   font-size: 2rem; 
//   height: 80px; 
//   display: flex; 
//   justify-content: flex-start; 
//   align-items: center;
// `   

// const SidebarNav = styled.nav`
//   background: #15171c; 
//   width: 250px;  
//   display: flex; 
//   justify-content: center; 
//   top: 0; 
//   left: 0;
//   transition: 350ms;   
// `   
// const SidebarWrap = styled.div`
//   width: 100%;
//   height: 100%; 
// `         

export const ShowCaseItem = (props) => {    
  const [sidebar, setSidebar] = useState(false) 
  const showSidebar = () => setSidebar(!sidebar);  
  const images = props.photos?.map((itemall) => (itemall.url))   
  console.log(images);
     return( 
         <>                         
          <div className="cards_item">
            <div className="card">
              <div className="card_image">
                <img className="card-img" src={images[0]}/>
              </div>
              <div className="card_content">
                <h2 className="card_title">{props.name}</h2> 
                <p className="card_price">€ {props.price} </p>
              </div>
            </div>
          </div>
         </>
     )
}