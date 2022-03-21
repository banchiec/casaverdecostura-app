import { ContainerAdminPage } from "./AdminStyled"
import AdminLayout from "../../layouts/admin/Admin"

const Admin = () => {
	return(
		<ContainerAdminPage>
			<AdminLayout>
			</AdminLayout>
			<div className='container_screen'>
			</div>
		</ContainerAdminPage>
	)
}
export default Admin 