import styled from "styled-components";

export const ContainerSidebarShop = styled.div`
	display:none;
	@media (min-width: 780px){
		display: inline;
		hr {
			/* position: fixed ; */
			width: 200px ;
			height: 2px ;
			/* border: 1px solid green; */
		}
		h4 {
			position: fixed;
			left: 200px;
			top:  210px;
			z-index: 1;
			:hover {
				font-weight: 600;
				color: rebeccapurple;
				font-size: 15.5px;
			}
		}
	  .link-show {
			position: fixed ;
			left: 0px;
			border: 1px solid red;
			z-index: 1 ;
		}
		div  {
			position: fixed;
		  background: white;
			opacity: .9;
			left: -300px ;
			width: 300px;
			height: 76vh;
		}
		ul{
			padding: 4rem 4rem 4rem 4rem;
			li {
				font-size: 16.5px;
				/* border:1px solid green; */
				list-style: none;
				/* background-color: pink; */
				padding: 13px 0 13px 13px;
			}
			li:hover{
				/* color: green; */
        color: #007220;
				font-weight: 600;
				background-color: whitesmoke;
				border-bottom: 1px solid orange ;
				/* transform: transitionY(10px);
				transition: .25s ease-out 0.25s ; */
			}
		}
		.show {
			transform:  translate(0px);
			transition: 1s;
			left: 0px;
		}
	}
`