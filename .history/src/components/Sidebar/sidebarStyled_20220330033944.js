import styled from 'styled-components'

export  const ContainerSidebar =  styled.div`
	display: none;
	/* position: relative; */
	/* top: 0; */
  /* background-color: #007220; */
	/* display: flex ; */
	/* color: white; */
	/* flex-wrap: wrap; */
	/* justify-content: between ; */
	nav {
    background-color: #007220;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
	  color: white;
	  height: 100%;
	}
	.sidebar_logo {
		border: .5px solid whitesmoke;
	}
	img {
		margin: 0 2rem 0 2rem;
		padding: 1.5em 0 1.5em 0 ;
		width: 280px;
		height: 70px ;
	}
	
	ul{
		text-align: left;
		li{
			list-style: none;
		}
	}
	a {
		color: whitesmoke;
		text-decoration: none;
	}
	.hidden {
		display: none;
	}
	.show {
		display: block;
	}
	@media (min-width: 780px){
		display: flex;
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
	  color: white;
	}

`
