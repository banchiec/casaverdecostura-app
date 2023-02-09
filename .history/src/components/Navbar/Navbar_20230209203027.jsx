/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaUserPlus } from 'react-icons/fa'
import { FiLogIn } from 'react-icons/fi'
// import { slide as Menu } from 'react-burger-menu'
import { NavbarContainer } from './navbarStyled'
import { MdFavorite } from 'react-icons/md'
import './Navbar.css'
import * as PATHS from '../../utils/paths'
// import { cartContext } from '../context/CartContext'
import { favoriteContext } from '../context/FavoritesContext'
import PreNavbar from '../PreNavbar/PreNavbar'

const Navbar = (props) => {
	// const { cartItems } = useContext(cartContext)
	const { favorites } = useContext(favoriteContext)

	// const total = cartItems.reduce(
	//   (previous, current) => previous + current.amount,
	//   0
	// );
	const [isShownHoverContent, setIsShownHoverContent] = useState(false)
	const [isAboutHoverContent, setisAboutHoverContent] = useState(false)
	const handleCloseHover = () => {
		setIsShownHoverContent(false)
		setisAboutHoverContent(false)
	}
	const [clicked, setClicked] = useState(false)

	return (
		<>
			<NavbarContainer>
				<PreNavbar clicked={clicked} setClicked={setClicked} />
				<div onMouseLeave={handleCloseHover}>
					<div className="container-search">
						<Link to={'/search'}>
							<p className="search">BUSCAR</p>
						</Link>
					</div>
					<div className="navbar-center">
						<Link to={PATHS.HOMEPAGE}>
							<img className="navbarlogo" src="logo_condor.png" alt="Logo" />
						</Link>
						<div className="navbar_menu">
							<Link to={'/'}>INICIO</Link>
							<a href="/shopping">TIENDA</a>
							<Link className="collection-link" to={PATHS.COLLECTIONS}>
								<a onMouseEnter={() => setIsShownHoverContent(true)}>COLLECIONES</a>
							</Link>
							{isShownHoverContent && (
								<div
									onMouseLeave={() => setIsShownHoverContent(false)}
									onMouseEnter={() => setIsShownHoverContent(true)}
									className="navbar-area-collections"
								>
									<div className="navbar-area-collections-content">
										<li>
											<Link onClick={() => setIsShownHoverContent(false)} to={'/summer'}>
												{' '}
												<ul> Verano</ul>
											</Link>
											<ul>
												EXCLUSIVA
												<Link to={'/exclusive'}></Link>
											</ul>
											<ul>
												Primavera
												<Link to={'/spring'}></Link>
											</ul>
											<ul>
												Invierno
												<Link to={'/winter'}></Link>
											</ul>
										</li>
									</div>
								</div>
							)}

							<Link to={'/sewing'}>COSTURA</Link>
							<Link to={'/aboutus'}>
								<a onMouseEnter={() => setisAboutHoverContent(true)}>NOSOTRAS </a>
							</Link>
							{isAboutHoverContent && (
								<div
									onMouseEnter={() => setisAboutHoverContent(true)}
									className="navbar-area-collections"
								>
									<div className="navbar-area-collections-content">
										<li>
											<ul>
												<Link to={'/aboutus'}>ACERCA DE CRISTINA CENDOYA</Link>
											</ul>
											<ul>
												CONTACTO
												<Link to={'/aboutus'}></Link>
											</ul>
										</li>
									</div>
								</div>
							)}
							{props?.user?.role === 'admin' && <Link to={PATHS.ADMIN}>ADMIN</Link>}
						</div>
					</div>
					<div className="navbar_icons">
						{props.user ? (
							<Link to={PATHS.HOMEPAGE} className="authLink" onClick={props.handleLogout}>
								<FiLogIn />
							</Link>
						) : (
							<>
								<Link to={PATHS.LOGINPAGE} className="authLink">
									<FiLogIn />
								</Link>
								<Link to={PATHS.SIGNUPPAGE} className="authLink">
									<FaUserPlus />
								</Link>
							</>
						)}
						<Link to={PATHS.HOMEPAGE} className="authLink" onClick={props.handleLogout}>
							<Link to={'/favorites'}>
								<span>
									{' '}
									<MdFavorite></MdFavorite>{' '}
								</span>
							</Link>
						</Link>
					</div>
				</div>
				<div className="navbar_icons_mobile">
					<div>
						<Link to={'/favorites'}>
							<MdFavorite />
						</Link>
						<p>{favorites.length}</p>
					</div>
				</div>
			</NavbarContainer>
			<div className={`initial ${clicked ? 'activated' : ''}`}></div>
		</>
	)
}

export default Navbar
