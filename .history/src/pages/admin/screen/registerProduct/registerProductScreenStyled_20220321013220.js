import styled from "styled-components";

export const Form = styled.form`
	display: flex;
	align-items: center;
	/* border: 1px solid green; */
	box-shadow: 3px 10px 10px 2px gray;
	width: 70% ;
	height: 60% ;
	margin: 0 auto;
	margin-top: 3rem;
	div {
		/* border: 1px solid green; */
		margin: 0 auto;
		padding: 1.3rem;
	}
`

export const FormGroup = styled.div`
	color: palevioletred;
  display: block;
	width: 300px;
	margin: 50px auto;
`;

export const Label = styled.label`
	margin-bottom: 0.5em;
	color: palevioletred;
    display: block;
`;


export const Input = styled.input`
	padding: 0.5em;
	color: palevioletred;
	background: papayawhip;
	border: none;
	border-radius: 3px;
	width: 100%;
	margin-bottom: 0.5em;
`;

export const Message = styled.label`
	margin-bottom: 0.5em;
	color: palevioletred;
    display: block;
`;
