import {Form, FormGroup, Label, Input, Message}  from './registerProductScreenStyled';

const RegisterProductScreen = () => {
	return(
		<Form>
			<Form.Title>
				<h3>Registrar Producto</h3>
			</Form.Title>
			<div>
			<FormGroup>
				<Label htmlFor="label">Nombre</Label>
				<Input id="label" />
				<Message>message</Message>
			</FormGroup>
			<FormGroup>
				<Label htmlFor="label">Label</Label>
				<Input id="label" />
				<Message>message</Message>
			</FormGroup>
			<FormGroup>
				<Label htmlFor="label">Label</Label>
				<Input id="label" />
				<Message>message</Message>
			</FormGroup>
			<FormGroup>
				<Label htmlFor="label">Label</Label>
				<Input id="label" />
				<Message>message</Message>
			</FormGroup>
			<FormGroup>
				<Label>Label 2</Label>
				<Input />
				<Message>message</Message>
			</FormGroup>
			</div>
			<div>
				<h1>Foto</h1>
			</div>
	  </Form>
	)
}

export default RegisterProductScreen