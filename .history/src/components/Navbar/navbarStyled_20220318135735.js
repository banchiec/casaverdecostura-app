import styled from "styled-components";

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
	align-items: center ;
  background: #007220;
  font-weight: 400;
	div {
		/* border: 1px solid white; */
	}
	.authLink {
		font-size: 18px ;
		padding: 0;
	}
	a {
		color: white;
		text-decoration: none;
		font-size: 19px;
		transition: color 0.2s ease-in-out;
	}
	svg {
		padding:0;
	}
	@media (min-width: 780px){
		justify-content: space-between ;
		img{
			width: 180px;
			height: 30px;
		}
	}
`
export const  ContainerMenuNavbar = styled.ul`
	display: none;
	@media (min-width: 780px){
		display: flex;
  	border: 1px solid white;
		
		flex-direction: row ;
	}
`