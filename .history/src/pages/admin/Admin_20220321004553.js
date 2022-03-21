import { ContainerAdminPage } from "./AdminStyled"
import AdminLayout from "../../layouts/admin/Admin"

const Admin = () => {
	return(
		<ContainerAdminPage>
			<AdminLayout {...props}>
				<h1>Products</h1>
			</AdminLayout>
		</ContainerAdminPage>
	)
}
export default Admin 