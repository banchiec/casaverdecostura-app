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
			align-items: center ;
		}
		img{
			border: 1px solid white;
		}
		a{
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