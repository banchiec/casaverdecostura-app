import Sidebar from "../../components/Sidebar/Sidebar"
import {ContainerLayoutAdmin} from './adminStyled'

const AdminLayout = ({children}) =>{
	return(
		<>
			<div>
				<Sidebar/>
			</div>
			<main>{children}</main>
		</>
	)
}
export default AdminLayout