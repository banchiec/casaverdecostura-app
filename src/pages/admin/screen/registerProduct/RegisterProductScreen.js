import { useEffect, useState } from 'react';
import {Form, FormGroup, Label, Input, Message}  from './registerProductScreenStyled';
import ProductsService from '../../../../services/products.service'
import { StyledFormWrapper,StyledForm, StyledInput, StyledButton,  } from './registerProductScreenStyled' 
import CategoriesServices from '../../../../services/categories.service' 
import './css/styles.css'

let productService = new ProductsService()   
let categoryServices = new CategoriesServices()
let uploadServices = new UploadsService()

const RegisterProductScreen = () => {
  const [categories, setCategories] = useState([])
  const [images, setImages] = useState([])
  const [form, setForm] = useState({       
      name: "", 
      price: "", 
      description: "",  
      size: ""
  })   
 
  console.log(form)

  useEffect(() => {
    getCategories()
  },[])

  const getCategories = () => {
       categoryServices 
      .getCategories() 
      .then((item) => { 
       setCategories(item?.data)
      }) 
      .catch(err => console.log("Error retreiving products", err))     
  } 
  const handleFile = (e) => {
    setIsLoading(true)
    console.log(e.target.files);
    const uploadData = new FormData()
    uploadData.append('photos', e.target.files[0])
    uploadServices.uploadImg(uploadData)
      .then(res => {
        setIsLoading(false)
        setImages([ ...images, res.data.cloudinary_url])
      })
      .catch(error => alert("Error, esto no carga"))
    getColor()
    
  }
  const getColor = () => {
    setCheckColor(true)
    console.log("Tienes que introducir un color.")
  }
  console.log(images);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value});
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
            size: ""     
          })
        }) 
       .catch(err => console.log(err))   
    }   

  const size = 'xs'
  return(
        <> 
        <div className="register-page">
          <div  className="form">
            <form onSubmit={handleSubmit} className="login-form">
              <input type="text"    name="name" value={form.name}   onChange={(e) => handleChange(e)} placeholder="name"/>
              <input type="text"  name="price"   value={form.price}     onChange={(e) => handleChange(e)} placeholder="price"/>
              <input type="text" name="description" value={form.description} onChange={(e) => handleChange(e)} placeholder="descripción"/>
              <button type='submit'>Crear</button>
              {/* <p className="message">Already registered? <a href="#">Sign In</a></p> */}
            </form>

          </div>
          </div>
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

export default RegisterProductScreen;