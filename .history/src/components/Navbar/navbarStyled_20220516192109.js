import styled from "styled-components";

export const NavbarContainer = styled.nav.attrs(props => ({
	hidden: props.hidden
}))`
  display: ${props => props.hidden };
	display: flex;
	flex-direction: row;
  justify-content: space-between;
	align-items: center;
  flex-wrap: wrap;
  background: #007220;
  font-weight: 400;
	img {
		width: 180px;
		height: 50px;
	}
	svg {
		padding:0;
	}
	.navbar_menu {
		display:none ;
	}
	.navbar_icons {
		display: none;
	}
	.container-favorites {
		display: flex ;
		flex-direction: row;
		border: 1px solid white;
		margin: 0;
		padding: 0;
	}
	.icon-dinamic {
		display: flex ;
		flex-direction: column;
		border: 1px solid white;
		padding: 0;
		margin: 0;
		border:  0;
	}
	.icon-dinamic svg {
		font-size: 1.4em;
		color: white;
		margin: 0;
		padding: 0;
	}
	.icon-dinamic p {
		position: absolute;
		font-size:  12px;
		margin-top: -10px;
		color: red;
		font-weight: 800;
		margin-left: 8px;
		padding: 0;
	}
	.container-search{
		display: none;
	}

	@media (min-width: 780px){
		display: flex;
		justify-content: center;
    font-weight: 500;
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
			display: inline ;
			position: absolute;
			right: 4%;
			padding: 0;
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
			padding: 1rem;
			display:flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			div {
				margin-top: 15px ;
				margin-bottom: -15px;
			}

		}
		img {
			padding: 10px  0 10px 0; 
			width: 450px;
			height: 92px;
		 }
		.container-search {
		  display: inline;
			position: absolute;
			left: 4%;
			/* border: 1px solid white; */
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
export const  ContainerMenuNavbar = styled.ul`
	display: none;
	@media (min-width: 780px){
		display: flex;
		flex-direction: row ;
		align-items: center ;
		a {
			color: white;
			text-decoration: none;
			font-size: 20px;
			padding: 0  10 px 0 10px;
			transition: color 0.2s ease-in-out;
		}
	}
`