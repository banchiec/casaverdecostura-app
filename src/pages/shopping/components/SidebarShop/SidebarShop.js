import { useState } from 'react'
import { ContainerSidebarShop } from './sidebarShopStyled.js'
import './sidebarShop.css'

const SidebarShop = (props) => {
	const [showSidebarshop, setShowSidebarshop] = useState(true)
	const [show, setShow] = useState('')

	const toogleShowSidebashop = () => {
		setShowSidebarshop(!showSidebarshop)
		showSidebarshop ? setShow('show') : setShow('')
	}

	return (
		<ContainerSidebarShop>
			<hr className="link-show" />
			<h4 className="title_sidebar_shop" onClick={toogleShowSidebashop}>
				FILTROS
			</h4>
			<div className={show}>
				<ul className="menu_sidebar_shop">
					<li onClick={props.handleChange} id="Vestidos">
						Vestidos
					</li>
					<li onClick={props.handleChange} id="Chaquetas">
						Chaquetas
					</li>
					<li onClick={props.handleChange} id="Pantalones">
						Pantalones
					</li>
					<li onClick={props.handleChange} id="Faldas">
						Faldas
					</li>
					<li onClick={props.handleChange} id="Blusas">
						Blusas
					</li>
					<li onClick={props.handleChange} id="Abrigos">
						Abrigos
					</li>
					<li onClick={props.handleChange} id="Toreras">
						Toreras
					</li>
					<li onClick={props.handleChange} id="Kimonos">
						Kimonos
					</li>
					<li onClick={props.handleChange} id="Tocados">
						Tocados
					</li>
					<li onClick={props.handleChange} id="Monos">
						Monos
					</li>
					<li onClick={props.handleChange} id="Joyeria">
						Joyeria
					</li>
					<li onClick={props.handleChange} id="Bolsos">
						Bolsos
					</li>
					<li onClick={props.handleChange} id="Mascarilla">
						Mascarilla
					</li>
				</ul>
			</div>
		</ContainerSidebarShop>
	)
}
export default SidebarShop
