import styled from 'styled-components'
const ContainerHome = styled.div`
	border: 1px solid red;
	/* margin-top: 100px; */
	@media (min-width: 780px) {
		.caption div {
		}
		.caption {
			h1 {
				font-size: 3.8em;
			}
		}
		.section-party {
			justify-content: end;
			margin-right: 15%;
			align-items: end;
			h3 {
				color: black;
				font-size: 4.1em;
			}
			p {
				font-size: 1.8em;
			}
		}
		.section-girlfriends {
			justify-content: end;
			margin-left: 15%;
			align-items: start;
			h3 {
				color: black;
				font-size: 4.1em;
			}
			p {
				font-size: 1.8em;
			}
		}
	}
`
export { ContainerHome }
