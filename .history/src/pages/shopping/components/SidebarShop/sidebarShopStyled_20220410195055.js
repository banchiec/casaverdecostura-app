import styled from "styled-components";

export const ContainerSidebarShop = styled.div`
	display:none;

	@media (min-width: 780px){
		display: inline;
		border: 1px solid green;
		h4 {
			left: 200px;
			position: fixed;
			background: #007220;
			z-index: 1;
		}
		div  {
			position: fixed;
			border: 1px solid green;
			opacity: 5;
			left: -300px ;
			width: 300px;
			height: 500px ;
			border: 1px solid red;
		}
		.show {
			border:1px solid green;
			left: 0px;
		}
	}
	/* border: 1px solid red; */
	/* h4{
		z-index: -1;
	} */
	
`