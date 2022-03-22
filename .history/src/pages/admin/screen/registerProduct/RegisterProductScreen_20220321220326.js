import { useState } from 'react';
import {Form, FormGroup, Label, Input, Message}  from './registerProductScreenStyled';
import ProductsService from '../../../../services/products.service'
import { StyledFormWrapper,StyledForm, StyledInput, StyledButton,  } from './registerProductScreenStyled' 
import CategoriesServices from '../../../../services/categories.service'
import './css/styles.css'

let productService = new ProductsService()   
let categoryServices = new CategoriesServices()

const RegisterProductScreen = () => {
const [form, setForm] = useState({
      name: "", 
      price: "", 
      description: "",  
      size: "", 
      beloning: {
        idCategory: "", 
        subCategory: ""
       }
    })  

  const handleChange = (e) => {
  	setForm({ ...form, [e.target.name]: e.target.value , beloning: {
      idCategory: e.target.value
    } });
  }; 
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
            beloning: {
            idCategory: ""
  	        }       
          })
        }) 
       .catch(err => console.log(err))   
    }   
    return(
        <> 
        <div class="login-page">
          <div class="form">
            <form class="register-form">
              <input type="text" placeholder="name"/>
              <input type="password" placeholder="password"/>
              <input type="text" placeholder="email address"/>
              <button>create</button>
              <p class="message">Already registered? <a href="#">Sign In</a></p>
            </form>
            <form class="login-form">
              <input type="text" placeholder="username"/>
              <input type="password" placeholder="password"/>
              <button>login</button>
              <p class="message">Not registered? <a href="#">Create an account</a></p>
            </form>
          </div>
          </div>
        {/* <StyledFormWrapper>
                <StyledForm onSubmit={(e) => handleSubmit(e)}>
                    <h2>Crear nuevo producto</h2>
                    <label htmlFor="name">Nombre</label>
                    <StyledInput
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={(e) => handleChange(e)}
                    />
                    <label htmlFor="price">Precio</label>
                    <StyledInput
                        type="text"
                        name="price"
                        value={form.price}
                       onChange={(e) => handleChange(e)}
                    /> 
                    <label htmlFor="email">Descripcíon</label>
                    <StyledInput
                        type="text"
                        name="description"
                        value={form.description} 
                        onChange={(e) => handleChange(e)}
                    /> 
                    <label htmlFor="size">Size</label>
                      <StyledInput
                        type="text"
                        name="size"
                        value={form.size}
                        onChange={(e) => handleChange(e)}
                    />   
                    <label htmlFor="idCategory">Name category</label>
                    

                    <select multiple onChange={(e) => handleChange(e)}
                        className="custom-select"
                        id="inputGroupSelect" 
                        name="idCategory"

                    >
                       {
                           props.categoriesList?.map((elm) => { 
                               return( 
                                   <>
                                   <option  value={elm._id}>{elm.name}</option> 
                                   </>
                               )
                           })
                       }
                    </select>
                  
                    
                    <StyledButton type='submit'>Crear producto</StyledButton>
                </StyledForm>  

                
                 
        </StyledFormWrapper> */}
	  </>
	)
	// return(
	// 	<Form>
	// 		<div>
	// 		<FormGroup>
	// 			<h2>Registrar Producto</h2>
	// 			<Label htmlFor="label">Nombre</Label>
	// 			<Input id="label" />
	// 			<Message>message</Message>
	// 		</FormGroup>
	// 		<FormGroup>
	// 			<Label htmlFor="label">Label</Label>
	// 			<Input id="label" />
	// 			<Message>message</Message>
	// 		</FormGroup>
	// 		<FormGroup>
	// 			<Label htmlFor="label">Label</Label>
	// 			<Input id="label" />
	// 			<Message>message</Message>
	// 		</FormGroup>
	// 		<FormGroup>
	// 			<Label htmlFor="label">Label</Label>
	// 			<Input id="label" />
	// 			<Message>message</Message>
	// 		</FormGroup>
	// 		<FormGroup>
	// 			<Label>Label 2</Label>
	// 			<Input />
	// 			<Message>message</Message>
	// 		</FormGroup>
	// 		</div>
	// 		<div>
	// 			<h1>Foto</h1>
	// 		</div>
	//   </Form>
	// )
}

export default RegisterProductScreen