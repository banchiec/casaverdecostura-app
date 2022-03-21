import Sidebar from "../../components/Sidebar/Sidebar"
import {ContainerLayoutAdmin} from './adminStyled'

const AdminLayout = ({children}) =>{
	return(
		<>
		// <ContainerLayoutAdmin>
			<div>
				<Sidebar/>
			</div>
			<main>{children}</main>
		// </ContainerLayoutAdmin>
		</>
	)
}
export default AdminLayout