import styled from 'styled-components'  
import { FilterSideBarData } from '../FilterSideBarData/FilterSideBarData' 
import Submenu from "../../components/SubMenu/SubMenu"

  const SidebarNav = styled.nav`
  background: #007220;; 
  width: 200px;  
  font-size: 1.5rem;
  display: flex; 
  justify-content: center;     
  left: 0;
  transition: 350ms;  

`   

const SidebarWrap = styled.div `
 width: 100%;
`     

 export const SideFilterBar = () => { 
     return(
        <SidebarNav>
    <SidebarWrap>
  {FilterSideBarData.map((item , index) => { 
     
     return <Submenu item={item} key={index}/>

  })}
    </SidebarWrap>
</SidebarNav>
     )
 }