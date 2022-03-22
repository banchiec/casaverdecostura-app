import React, { useState, useEffect } from 'react';
import {Form, FormGroup, Label, Input, Message}  from './registerProductScreenStyled'; 
import ProductsService from '../../../../services/products.service';   



const RegisterProductScreen = () => {   
let productService = new ProductsService();  

const [form , setForm] = useState({
	 name: "", 
	 price: "", 
	 description: "", 
	 size: "", 

 }) 


 console.log(form)
  

  
 const handleChange = (e) => {
	setForm({ ...form, [e.target.name]: e.target.value
	});
}
  
const handleSubmit = (e) => {  
	e.preventDefault()
	productService
	 .createProduct(form)   
	 .then(() => { 
		 setForm({
			 name: "", 
			 price: "", 
			 description: "",    
			 size: "",       
		 })
	 }) 
	 .catch(err => console.log(err))   
}   

  

	return(
		<Form onSubmit={(e) => handleSubmit(e)}>
			<div>
			<FormGroup>
				<h2>Registrar Producto</h2>
				<Label htmlFor="label">Nombre</Label>
				<Input type="text" name="name" value={form.name} onChange={(e) => handleChange(e)} id="label" />
				<Message>Nombre del producto</Message>
			</FormGroup>
			<FormGroup>
				<Label htmlFor="label">Price</Label>
				<Input   type="text" name="price" value={form.price}  onChange={(e) => handleChange(e)}   id="label" />
				<Message>Precio del producto</Message>
			</FormGroup>
			<FormGroup>
				<Label htmlFor="label">Descripcíon</Label>
				<Input  name="description" value={form.description} onChange={(e) => handleChange(e) } id="label" />
				<Message>Introduzca la descripcíon</Message>
			</FormGroup>
			<FormGroup>
				<Label htmlFor="label">Introduzca el tamaño del producto</Label>
				<Input type="text" name="size" value={form.size} id="label" onChange={(e) => handleChange(e)} />
				<Message>Tamaño del producto</Message>
			</FormGroup>

			<button type="submit">Submit</button> 
			</div> 
	  </Form>
	)
}

export default RegisterProductScreen;