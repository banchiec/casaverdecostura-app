import { Container } from './preNavbarStyles'
import NavbarBurgerButton from '../NavbarBurgerButton/NavbarBurgerButton'
import BurgerMenuList from '../BurgerMenuList/BurgerMenuList'

const PreNavbar = ({ clicked, setClicked }) => {
	return (
		<>
			<Container>
				<h1>CASAVERDE</h1>
				<NavbarBurgerButton setClicked={setClicked} clicked={clicked} />
			</Container>
			<BurgerMenuList clicked={clicked} />
		</>
	)
}
export default PreNavbar
