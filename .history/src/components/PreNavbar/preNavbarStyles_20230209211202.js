import styled from 'styled-components'

const Container = styled.div`
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	padding: 0 10px;
	@media (min-width: 1100px) {
		border: 1px solid green;
		margin: 0;
		/* border: none; */
		display: flex;
		flex-direction: column;
		justify-content: center;
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
