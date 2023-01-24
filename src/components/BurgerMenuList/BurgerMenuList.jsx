import React from 'react'
import { Link } from 'react-router-dom'
import './BurgerMenuList.css'

function BurgerMenuList({ clicked, setClicked }) {
	return (
		<div className={`burgermenulist ${clicked ? 'activated' : ''}`}>
			<Link onClick={() => setClicked(!clicked)} to={'/'}>
				Inicio
			</Link>
			<Link onClick={() => setClicked(!clicked)} to={'/shopping'}>
				Tienda
			</Link>
			<Link to={'/collections'}>Colleciones</Link>
			<Link onClick={() => setClicked(!clicked)} to={'#'}>
				Costura
			</Link>
			<Link onClick={() => setClicked(!clicked)} to={'#'}>
				Nosotras
			</Link>
		</div>
	)
}

export default BurgerMenuList
