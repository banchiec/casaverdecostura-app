import {Form, FormGroup, Label, Input}  from './registerProductScreenStyled';

const Message = 'this'
const RegisterProductScreen = () => {
	return(
		<Form>
			<FormGroup>
				<Label htmlFor="label">Label</Label>
				<Input id="label" />
				<Message>This is the validation message</Message>
			</FormGroup>
			<FormGroup>
				<Label>Label 2</Label>
				<Input />
				<Message>This is the validation message</Message>
			</FormGroup>
	  </Form>
	)
}

export default RegisterProductScreen