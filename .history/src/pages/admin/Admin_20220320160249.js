import Layout from "./Layout"

const Admin = ({children}) => {
	return(
		<>
			<Layout>
				<main>{children}</main>
			</Layout>
		</>
	)
}
export default Admin 