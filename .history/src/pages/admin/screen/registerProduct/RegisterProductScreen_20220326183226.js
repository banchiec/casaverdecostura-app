import { useEffect, useState } from 'react';
import {Form, FormGroup, Label, Input, Message}  from './registerProductScreenStyled'   
import ProductsService from '../../../../services/products.service' 
import { StyledFormWrapper,StyledForm, StyledInput, StyledButton,  } from './registerProductScreenStyled' 
import CategoriesServices from '../../../../services/categories.service' 
import UploadsService from '../../../../services/upload.services' 
import { SketchPicker } from 'react-color';
import './css/styles.css'



const RegisterProductScreen = () => {   
  let productService = new ProductsService()   
  let categoryServices = new CategoriesServices()
  let uploadServices = new UploadsService() 

  const [images, setImages] = useState([]);    

  const [image, setImage] = useState()
  

  const [modalActive, setModalActive] = useState(true)    
  const [color, setColor] = useState({
    background: '#fff'
  }) 
  const [isLoading, setIsLoading] = useState(false)
  const [sizes, setSizes] = useState([]) 
  const [checkColor, setCheckColor] = useState()   

  const [form, setForm,] = useState({       
    name: "", 
    price: "", 
    description: "",  
    size: [""], 
  })   
    

  const handleSubmit = (e) => {    
    e.preventDefault() 
    let product = { 
      name: form.name, 
      price: form.price, 
      description:  form.description, 
      size: [form.size], 
      photos: images
    }             
    
    console.log(product)

    e.preventDefault()
    productService
      .createProduct(product)   
      .then((res) => {   
        console.log(res)
      }) 
      .catch(err => console.log(err))   
  }    
  const handleFile = (e) => {
    setIsLoading(true)
    const uploadData = new FormData()
    uploadData.append('photo', e.target.files[0])
    uploadServices.uploadImg(uploadData)
    .then(res => { 
      setIsLoading(false)
      setImage( res.data.cloudinary_url)                    
        if(res.status === 200) {
        getColor()
      }
    })
    .catch(error => alert("Error,  el tamaño de la imagén es muy grande, intentalo de nuevo"))   
  } 
  const getColor = (res) => { 
    setCheckColor(true)                
    console.log("Tienes que introducir un color.")
  } 
  const  handleChangeComplete = (color) => { 
    setColor({ color: color.hex });
      setImages([...images, {url: image, color: color}]) 
    setCheckColor(false)  
    // setImage(null)
    // setColor(null)
  };
  const handleChange = (e) => { 
    setForm({ ...form, [e.target.name]: e.target.value});    
    e.target.name === 'sizes' && setSizes[...sizes, e.target.value]

  };  
  console.log(form)
  console.log(images);
  console.log(color);
  console.log(sizes);
  return( 
      <> 
        <div className="register-page">
            <div className="form">
              <h1 className='title-screen'>Registrar Producto</h1>
              <div className='container-forms'>
                <form onSubmit={handleSubmit} className="login-form">
                  <div>
                  <input type="text" name="name" onChange= {(e)=>{handleChange(e)}}  placeholder="name"/>
                  <input type="text" name="price" onChange= {(e)=>{handleChange(e)}} placeholder="price"/>
                  <input type="text" name='description' onChange= {(e)=>{handleChange(e)}} placeholder="descripción"/> 
                  <br/>
                  <label htmlFor="sizechange">Change your size</label> 
                  <br/>
                  <select id="sizechange" multiple={true} name='sizes' onChange={(e)=>handleChange(e)}>
                    <option value='xs'>xs</option>
                    <option value="s">s</option>
                    <option value="l">m</option>
                    <option value="m">l</option>
                  </select>    
                  <br/>
                  <label htmlFor="imgselect">Select image</label>
                  <input id='imgselect' type="file" name="img" value={form.img}  onChange={(e) => handleFile(e)} placeholder="email address" multiple/>
                  </div>
                  <div className='mini-galery' >
                    {images[0] != undefined && images?.map((item)=>{
                      return (
                        <div key ={item}>
                        <img src={item.url} alt={item}/>
                        </div>
                      )
                      })
                    }
                  </div>

                  <button>Crear</button> 
                </form>
                {checkColor && (
                    <div className='modal'> 
                    <div className='modal__content'> 
                      Select color    
                      <SketchPicker
                      color={ color}  
                      onChangeComplete={handleChangeComplete }
                      />
                    </div>
                    </div>
                )}
            </div> 
          </div> 
        </div>
      </>
    )
}

export default RegisterProductScreen;