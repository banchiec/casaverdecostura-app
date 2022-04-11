import styled from "styled-components";

export const ContainerSidebarShop = styled.div`
	display:none;
	@media (min-width: 780px){
		display: inline;
		border: 1px solid green;
		h4 {
			left: 200px;
			position: fixed;
			z-index: 1;
		}
		div  {
			position: fixed;
			border: 1px solid green;
			opacity: 5;
			left: -300px ;
			width: 300px;
			height: 100vh;
		}
		.show {
			border: 1px solid green;
			transform:  translate(0px);
			height: 100% ;
			transition: 1s;
			/* transition: all 1s ease 1s; */
			left: 0px;
			overflow: hidden;
		}
	}
	/* border: 1px solid red; */
	/* h4{
		z-index: -1;
	} */
	
`