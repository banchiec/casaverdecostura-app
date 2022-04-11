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
			opacity: .9;
			left: -300px ;
			width: 300px;
			height: 100vh;
		}
		ul{
			padding: 4rem 4rem 4rem 3rem;
			li {
				font-size: 16px;
				border: 1px solid green;
				list-style: none;
				padding: 10px;
			}
		}
		.show {
			/* border: 1px solid green; */
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