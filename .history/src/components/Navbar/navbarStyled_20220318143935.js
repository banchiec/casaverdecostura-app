import styled from "styled-components";

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
	align-items: center ;
  background: #007220;
  font-weight: 400;
	img {
			height: 30px;
			width: 180px;
	}
	svg {
		padding:0;
	}
	@media (min-width: 780px){
		justify-content: space-around;
    font-weight: 500;
		align-items: center ;
		div {
			display: flex ;
			justify-content: space-around ;
			/* border: 1px solid white; */
			padding: 10px ;
			align-items: center;
		}
		svg {
			font-size: 14px;
		}
		/* ul{
			padding: 0;
			border: 1px solid white;
			a {
				color: white;
				text-decoration: none;
				font-size: 19px;
				border: 1px solid white;
				transition: color 0.2s ease-in-out;
			}
		} */
		img {
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
		align-items: center ;
		border: 1px solid white;
		a {
			color: white;
			text-decoration: none;
			font-size: 20px;
			border: 0  10 px 0 10px;
			/* border: 1px solid white; */
			transition: color 0.2s ease-in-out;
		}
	}
`