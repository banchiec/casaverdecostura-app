import styled from "styled-components";

export const NavbarContainer = styled.nav.attrs(props => ({
	hidden: props.hidden
}))`
  display: ${props => props.hidden };
  justify-content: space-between;
  flex-wrap: wrap;
	align-items: center ;
  background: #007220;
  font-weight: 400;
	
	img {
			height: 30px;
			width: 280px;
	}
	svg {
		padding:0;
	}
	.navbar_menu {
		display:none ;
	}

	@media (min-width: 780px){
		justify-content: space-around;
    font-weight: 400;
		align-items: center ;
		padding: 0 ;
		div {
			display: flex ;
			justify-content: space-around ;
			/* border: 1px solid white; */
			padding: 10px ;
			align-items: center;
		}
		svg {
			padding: 0;
			border: 0 ;
			font-size: 18px;
		}
		.navbar_menu {
			display: flex ;
			/* border: 1px solid white; */
			flex-direction: row ;
			justify-content: center;
			align-items: center;
			a {
				color: white;
				text-decoration: none;
				margin: 0 15px 0 15px;
				font-size: 18px;
				transition: color 0.2s ease-in-out;
			}
		}
		.navbar_icons {
			padding: 0;
			/* border: 1px solid white; */
			a {
				color: white;
				text-decoration: none;
				padding:  0;
				margin: 0 15px 0 15px;
				font-size: 18px;
				transition: color 0.2s ease-in-out;
			}
		}
		.navbar-center {
			display:flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			border: 1px solid white;
		}
		img {
			padding: 10px  0 10px 0; 
			width: 320px;
			height: 70px;
		 }
	}
`
export const  ContainerMenuNavbar = styled.ul`
	display: none;
	@media (min-width: 780px){
		display: flex;
		flex-direction: row ;
		align-items: center ;
		border: 1px solid white;
		a {
			color: white;
			text-decoration: none;
			font-size: 20px;
			padding: 0  10 px 0 10px;
			border: 1px solid white;
			transition: color 0.2s ease-in-out;
		}
	}
`