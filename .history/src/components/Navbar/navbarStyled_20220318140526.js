import styled from "styled-components";

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
	align-items: center ;
  background: #007220;
  font-weight: 400;
	.authLink {
		font-size: 18px ;
		padding: 0;
	}
	img {
			height: 30px;
			width: 180px;
	}
	svg {
		padding:0;
	}
	@media (min-width: 780px){
		justify-content: space-around;
		div {
			display: flex ;
			justify-content: space-around ;
			align-items: center;
		}
		svg{
			border: 1px solid white;
		}
		a{
			color: white;
			text-decoration: none;
			font-size: 17px;
			transition: color 0.2s ease-in-out;
		}
		img{
			width: 300px;
			height: 55px;

		}
	}
`
export const  ContainerMenuNavbar = styled.ul`
	display: none;
	@media (min-width: 780px){
		display: flex;
		flex-direction: row ;
	}
`