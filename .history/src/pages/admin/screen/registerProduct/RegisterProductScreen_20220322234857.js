import { useEffect, useState } from 'react';
import {Form, FormGroup, Label, Input, Message}  from './registerProductScreenStyled';
import { StyledFormWrapper,StyledForm, StyledInput, StyledButton,  } from './registerProductScreenStyled' 
import CategoriesServices from '../../../../services/categories.service'
import ProductsService from '../../../../services/products.service'
import UploadsService from '../../../../services/upload.services'

import './css/styles.css'

let productService = new ProductsService()   
let categoryServices = new CategoriesServices()
let uploadServices = new UploadsService()
const sizeData = ['xs', 's', 'm', 'l', 'xl']

const RegisterProductScreen = () => {
  const [categories, setCategories] = useState([])
  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [sizes, setSizes] = useState([])
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
  console.log(categories);

  const handleFile = (e) => {
    setIsLoading(true)
    const uploadData = new FormData()
      uploadData.append('photos', e.target.files[0])
      uploadServices.uploadImg(uploadData)
        .then(res => {
            setIsLoading(false)
            setImages([ ...images, res.data.cloudinary_url])
            console.log(images);
        })
        .catch(error => alert("Error, esto no carga"))
  }
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value});
    console.log(e.target.value);
    setSizes([...sizes, e.target.value])
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

  const size = 'xs'
  return(
        <> 
        <div className="register-page">
          <div className="form">
            <h1 className='title-screen'>Registrar Producto</h1>
            <div className='container-forms'>
            <form className="login-form">
              <input type="text" name="name" onChange= {(e)=>{handleChange(e)}}  placeholder="name"/>
              <input type="text" name="price" onChange= {(e)=>{handleChange(e)}} placeholder="price"/>
              <input type="text" name='description' onChange= {(e)=>{handleChange(e)}} placeholder="descripción"/>
              <input type="text" placeholder="name"/>
              <input type="password" placeholder="password"/>
              <input type="text" placeholder="email address"/>
              <select multiple={true} name='size' onChange={(e)=>handleChange(e)}>
                {/* {
                  sizeData.map((item)=>{
                   return ( <option key={item} value={item}>{item}</option>)
                  })
                } */}
                <option value='xs'>xs</option>
                <option value="s">s</option>
                <option value="l">m</option>
                <option value="m">l</option>
              </select>

              <button>Crear</button>
              {/* <p className="message">Already registered? <a href="#">Sign In</a></p> */}
            </form>
            <form className="register-form">
              <input type="text" placeholder="username"/>
              <input type="password" placeholder="password"/>
              <input type="file" onChange={(e) => handleFile(e)} placeholder="email address" multiple/>
              {/* <button>login</button> */}
              {/* <p className="message">Not registered? <a href="#">Create an account</a></p> */}
            </form>


            </div>
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

export default RegisterProductScreen