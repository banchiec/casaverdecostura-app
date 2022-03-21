import Sidebar from "../../components/Sidebar/Sidebar"
import {AdminLayout} from './adminStyled'

const AdminLayout = ({children}) =>{
	return(
		<AdminLayout>
			<div>
				<Sidebar/>
			</div>
			<main>{children}</main>
		</AdminLayout>
	)
}
export default AdminLayout