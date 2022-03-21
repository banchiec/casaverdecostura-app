import { ContainerAdminPage } from "./AdminStyled"
import AdminLayout from "../../layouts/admin/Admin"
import RegisterProductScreen from "./screen/registerProduct/RegisterProductScreen"

const Admin = () => {
	return(
		<ContainerAdminPage>
			<AdminLayout>
				<RegisterProductScreen/>
			</AdminLayout>
		</ContainerAdminPage>
	)
}
export default Admin 