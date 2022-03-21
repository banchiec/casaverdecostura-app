import Sidebar from "../../components/Sidebar/Sidebar"
import {AdminLayout} from './adminStyled'

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