import styled from "styled-components";

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
	align-items: center ;
  background: #007220;
  font-weight: 700;
	a {
		color: white;
		text-decoration: none;
		font-size: 17px;
		transition: color 0.2s ease-in-out;
	}
	svg {
		font-size: 17px ;
		font-weight: 600 ;
	}
`