import {Form, FormGroup, Label, Input, Message}  from './registerProductScreenStyled';

const RegisterProductScreen = () => {
	return(
		<Form>
			<div>

			<FormGroup>
				<Label htmlFor="label">Nombre</Label>
				<Input id="label" />
				<Message>This is the validation message</Message>
			</FormGroup>
			<FormGroup>
				<Label htmlFor="label">Label</Label>
				<Input id="label" />
				<Message>This is the validation message</Message>
			</FormGroup>
			<FormGroup>
				<Label htmlFor="label">Label</Label>
				<Input id="label" />
				<Message>This is the validation message</Message>
			</FormGroup>
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
			</div>
	  </Form>
	)
}

export default RegisterProductScreen