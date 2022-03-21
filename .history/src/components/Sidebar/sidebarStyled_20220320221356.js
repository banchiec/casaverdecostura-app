import styled from 'styled-components'

export  const ContainerSidebar =  styled.div`
	position: fixed;
	display: flex ;
	background-color: white;
	nav {
		box-shadow: 3px 0 30px 0 gray;
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
