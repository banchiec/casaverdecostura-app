import styled from 'styled-components'

export const NavbarContainer = styled.nav.attrs((props) => ({
	hidden: props.hidden,
}))`
	display: ${(props) => props.hidden};
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
	background: white;
	z-index: 20;
	position: fixed;
	width: 100%;
	padding: 10px;
	margin: 0;
	border: 1px solid red;
	height: 12vh;
	img {
		width: 180px;
		height: 50px;
	}
	svg {
		padding: 0;
	}
	.navbar_menu {
		display: none;
	}
	.navbar_icons {
		display: none;
	}
	.navbar_icons_mobile {
		display: flex;
		margin-top: 120px;
		flex-direction: row;
	}
	.navbar_icons_mobile div {
		display: flex;
		flex-direction: column-reverse;
		padding: 5px;
	}
	.navbar_icons_mobile div p {
		position: absolute;
		font-size: 14px;
		color: white;
		margin: 0 0 20px 6px;
	}
	.navbar_icons_mobile div svg {
		font-size: 1.2em;
		color: white;
	}
	.container-search {
		display: none;
	}
	@media (max-width: 540px) {
		/* border: 1px solid red; */
		/* align-items: center; */
		/* .navbar-center {
			border: 1px solid red;
		}
		height: auto; */
		img {
			display: none;
		}
	}
	@media (min-width: 1100px) {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		font-weight: 400;
		position: fixed;
		padding: 0;
		border: 0;
		margin: 0;
		div {
			display: flex;
			justify-content: space-around;
			align-items: center;
			/* border: 1px solid red; */
			/* padding: 10px ; */
		}
		svg {
			padding: 0;
			border: 0;
			font-size: 18px;
		}
		.navbar_icons_mobile {
			display: none;
		}
		.navbar_menu {
			display: flex;
			color: black;
			font-family: 'Barlow Semi Condensed', sans-serif;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			a {
				color: white;
				color: black;
				text-decoration: none;
				margin: 0 15px 0 15px;
				font-size: 18px;
				transition: color 0.2s ease-in-out;
			}
		}
		.navbar_icons {
			display: flex;
			position: absolute;
			right: 3%;
			padding: 0;
			a {
				color: black;
				text-decoration: none;
				padding: 0;
				margin: 0 15px 0 15px;
				font-size: 18px;
				transition: color 0.2s ease-in-out;
			}
		}
		.navbar_icons_favorites {
			border: '1px solid white';
			display: flex;
			flex-direction: row-reverse;
		}
		.navbar-center {
			/* padding: 1rem; */
			display: flex;
			flex-direction: column;
			justify-content: center;
			font-weight: 500;
			align-items: center;
			div {
				/* margin-top: 15px ; */
				/* margin-bottom: -15px; */
			}
		}
		img {
			width: 150px;
			height: 30px;
			/* margin-top: -20px ; */
			padding: 0;
			position: absolute;
			left: 4%;
		}
		.container-search {
			display: none;
			position: absolute;
			left: 4%;
			input {
				margin: 0 0 0 10px;
				border: none;
				border-radius: 5px;
				padding: 4px;
				background: #007220;
			}
			svg {
				width: 22px;
				height: 22px;
				color: whitesmoke;
			}
		}
	}
`
export const ContainerMenuNavbar = styled.ul`
	display: none;
	@media (min-width: 780px) {
		display: flex;
		flex-direction: row;
		align-items: center;
		a {
			color: white;
			text-decoration: none;
			font-size: 20px;
			padding: 0 10 px 0 10px;
			transition: color 0.2s ease-in-out;
		}
	}
`
