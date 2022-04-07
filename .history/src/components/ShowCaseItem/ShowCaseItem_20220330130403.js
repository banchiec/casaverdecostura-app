 import React, { useState } from "react"
import "./ShowCaseItem.css"  
import SubMenu from '../../components/SubMenu/SubMenu';
import styled from 'styled-components' 
import *  as AiIcons  from 'react-icons/ai'   
import { Link } from 'react-router-dom'    
import *  as FaIcons  from 'react-icons/fa'  
import { FilterSideBarData } from '../../components/FilterSideBarData/FilterSideBarData';  

const NavIcon = styled(Link)`
margin-left: 2rem; 
font-size: 2rem; 
height: 80px; 
display: flex: 
justify-content: flex-start; 
align-items: center: 
`   

const SidebarNav = styled.nav`
 background: #15171c; 
 width: 250px;  
 display: flex; 
 justify-content: center; 
 top: 0; 
 left: 0;
 transition: 350ms;   
`   
const SidebarWrap = styled.div `
width: 100%;
height: 100%; 
`         

export const ShowCaseItem = (props) => {    
  const [sidebar, setSidebar] = useState(false) 
  const showSidebar = () => setSidebar(!sidebar);  
  const images = props.photos?.map((itemall) => (itemall.url))   
     return( 
         <>                         
          <li class="cards_item">
            <div class="card">
              <div class="card_image"><img className="card-img" src={images[0]}></img></div>
              <div class="card_content">
                <h2 class="card_title">{props.name}</h2> 
                <p className="card_price">€ {props.price} </p>
              </div>
            </div>
          </li>
         </>
     )
}