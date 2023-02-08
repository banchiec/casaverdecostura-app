import styled from 'styled-components'

const Container = styled.div`
	@media (max-width: 1100px) {
		padding: 10px;
		position: relative;
		margin: 0;
		display: flex;
		align-items: center;
		width: 100%;
		justify-content: space-between;
	}

	h1 {
		padding: 0;
		margin: 0;
		border: 0;
	}
	@media (min-width: 1100px) {
		padding: 15px 10px;
		h1 {
			font-size: 3rem;
		}
	}
`

export { Container }
