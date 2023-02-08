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
		border: 1px solid green;
		/* border: 0; */
	}

	h1 {
		padding: 0;
		margin: 0;
		border: 0;
	}
	@media (min-width: 1100px) {
		/* border: 1px solid green; */
		padding: 10px 5px;
	}
`

export { Container }
