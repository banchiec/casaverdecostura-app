import styled from "styled-components";

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
	align-items: center ;
  background: #007220;
  font-weight: 400;
	div {
		display: flex ;
		border: 1px solid white;
		padding: 5px 0 5px 0;
		text-align: center;
	}
	.authLink {
		/* border: 1px solid white; */
		margin: 0 8px 0 8px ;
		font-size: 18px ;
		padding: 0;
	}
	a {
		color: white;
		margin: 0 10px 0 10px;
		text-decoration: none;
		font-size: 19px;
		transition: color 0.2s ease-in-out;
	}
	svg {
	}
`