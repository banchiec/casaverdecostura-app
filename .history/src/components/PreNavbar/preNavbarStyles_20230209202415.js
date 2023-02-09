import styled from 'styled-components'

const Container = styled.div`
	border: 1px solid green;
	/* padding: 20px 0; */
	@media (max-width: 1100px) {
		border: 1px solid red;
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
`

export { Container }
