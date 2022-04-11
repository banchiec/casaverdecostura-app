import styled from "styled-components";

export const ContainerSidebarShop = styled.div`
	display:none;
	@media (min-width: 780px){
		display: inline;
		h4 {
			left: 200px;
			position: fixed;
			z-index: 1;
		}
		div  {
			position: fixed;
		  background: white;
			opacity: 5;
			left: -300px ;
			width: 300px;
			height: 100vh;
		}
		ul{
			border: 1px solid green;
			padding: 4rem;
			li {
				list-style: none;
				border: 1px solid green;
				padding: 10px;
			}
		}
		.show {
			border: 1px solid green;
			transform:  translate(0px);
			transition: 1s;
			/* transition: all 1s ease 1s; */
			left: 0px;
		}
	}
	/* border: 1px solid red; */
	/* h4{
		z-index: -1;
	} */
	
`