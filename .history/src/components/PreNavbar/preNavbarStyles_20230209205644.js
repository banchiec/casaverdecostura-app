import styled from 'styled-components'

const Container = styled.div`
	padding: 0 10px;
	@media (max-width: 1100px) {
		border: 1px solid green;
		position: relative;
		margin: 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
	}
	h1 {
		padding: 0;
		margin: 0;
		border: 0;
	}
`

export { Container }