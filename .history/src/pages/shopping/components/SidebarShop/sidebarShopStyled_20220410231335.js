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
			padding: 4rem 4rem 4rem 4rem;
			li {
				font-size: 16.5px;
				border:1px solid green;
				list-style: none;
				padding: 13px 0 13px 10px;
			}
			li:hover{
				color: whitesmoke;
        color: #007220;
				background-color: pink;
				transform: transitionY(10px);
				transition: .25s ease-out 0.25s ;
			}
		}
		.show {
			transform:  translate(0px);
			transition: 1s;
			left: 0px;
		}
	}
`