import styled from "styled-components";

export const ContainerSidebarShop = styled.div`
	display:none;

	@media (min-width: 780px){
		display: inline;
		border: 1px solid green;
		h4 {
			border: 1px solid red;
		}
		div  {
			position: fixed;
			background: #007220;
			left: -300px ;
			width: 300px;
			height: 500px ;
			border: 1px solid red;
		}
	}
	/* border: 1px solid red; */
	/* h4{
		z-index: -1;
	} */
	
`