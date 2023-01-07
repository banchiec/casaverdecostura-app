import { useEffect, useState } from 'react'
// import HamburguerButton from "../../../../components/CustomButtons/HamburguerButton/HamburguerButton"
import { ContainerSidebarShop } from './sidebarShopStyled.js'
import './sidebarShop.css'

const dataMenu = [
	{
		id: 1,
		value: 'Vestidos',
	},
	{
		id: 2,
		value: 'Pantalones',
	},
	{
		id: 3,
		value: 'Blusas',
	},
	{
		id: 4,
		value: 'Chalecos',
	},
	{
		id: 5,
		value: 'Abrigos',
	},
	{
		id: 6,
		value: 'Faldas',
	},
	{
		id: 7,
		value: 'Toreras',
	},
	{
		id: 8,
		value: 'Kimonos',
	},
	{
		id: 9,
		value: 'Monos',
	},
	{
		id: 10,
		value: 'Joyeria',
	},
	{
		id: 11,
		value: 'Bolsos',
	},
	{
		id: 12,
		value: 'Mascarillas',
	},
	{
		id: 13,
		value: 'Tocados',
	},
]

// import { ContainerSidebar, ContainerIcon } from "./sidebarStyled";
// import {RiAdminFill} from 'react-icons/ri'
// import { GiLargeDress } from 'react-icons/gi'

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
