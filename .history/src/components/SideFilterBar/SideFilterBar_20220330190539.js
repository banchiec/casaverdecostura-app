import { FilterSideBarData } from '../FilterSideBarData/FilterSideBarData' 
import { SidebarNav } from './sideFilterBarStyled'
import Submenu from "../../components/SubMenu/SubMenu"

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