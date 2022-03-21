import { ContainerAdminPage } from "./AdminStyled"
import AdminLayout from "../../layouts/admin/Admin"
import Sidebar from "../../components/Sidebar/Sidebar"

const Admin = () => {
	return(
		<ContainerAdminPage>
			<Sidebar/>
		  <h1>Products</h1>
			{/* <AdminLayout> */}
			{/* </AdminLayout> */}
		</ContainerAdminPage>
	)
}
export default Admin 