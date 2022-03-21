import AdminLayout from "../../layouts/Admin"
import { ContainerAdminPage } from "./AdminStyled"
const Admin = () => {
	return(
		<ContainerAdminPage>
			<AdminLayout/>
			<div>
				<h1>CreateProduct</h1>
			</div>
		</ContainerAdminPage>
	)
}
export default Admin 