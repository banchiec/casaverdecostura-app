import styled from 'styled-components'

export  const ContainerSidebar =  styled.div`
	position: fixed;
	top: 0;
	bottom: 0;
	display: flex ;
	left: -1;
	flex-wrap: wrap;
	z-index: 10;
	justify-content: between ;
	background-color: white;
	nav {
		box-shadow: 3px 0 10px 0 gray;
	  height: 100vh;
		background-color: white;
	}
	ul{
		text-align: left;
		li{
			list-style: none;
		}
	}
	a {
		color: black;
		text-decoration: none;
	}
	.hidden {
		display: none;
	}
	.show {

	}
`
export const ContainerIcon = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 20px;
	a {
		padding: 0px 10px 0px 10px;
		text-decoration: none;
	}
	div {
		margin: 0;
		padding: 0px 10px 0px 10px;
		:hover {
			transform: scale(1.05);
			translate: unset;
		}
	}

	svg {
		font-size: 20px;
	}

`
