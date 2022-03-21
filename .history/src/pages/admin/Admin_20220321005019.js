import { ContainerAdminPage } from "./AdminStyled"
import AdminLayout from "../../layouts/admin/Admin"
import Sidebar from "../../components/Sidebar/Sidebar"

const Admin = () => {
	return(
		<ContainerAdminPage>
			<Sidebar/>
			{/* <AdminLayout> */}
				<h1>Products</h1>
			{/* </AdminLayout> */}
		</ContainerAdminPage>
	)
}
export default Admin 