import React, { useEffect, useState } from 'react' 
import ProductsService from '../../services/products.service'  
import "./Collections.css" 
import { Link } from 'react-router-dom'


export const Collections = () => {   

    const [products, setProducts] = useState([]) 
    let productService  = new ProductsService(); 
     
    const getProducts = () => {
        productService 
        .getProducts() 
        .then((data) => { 
            setProducts(data?.data)
        }) 
        .catch((err) => console.log(err))
    } 
      
    useEffect(() => {
        getProducts()
    }, [])  
    let getExclusiveCollection = products?.find(item => item.collections == "Exclusiva"); 
    let getSpringCollection = products?.find(item => item.collections == "Primavera");  
    let getWinterCollection = products?.find(item => item.collections == "Invierno");
  return (
      
    <>      
   
   <section id="exclusive">  
   <h3>Exclusiva</h3>
    <div className='container_colection'>  
   <img src={`${getExclusiveCollection?.photos[0].url}`}></img>
    </div>
   </section>       
   <section id="spring">  
   <h3>Primavera</h3>
    <div className='container_colection'>  
    <img src={`${getSpringCollection?.photos[0].url}`}></img>
    </div>
   </section>  
   <section id={"winter"}> 
   <h3>Winter</h3> 
   <div className='container_colection'>
    <img src={`${getWinterCollection?.photos[0].url}`}></img>
    </div>
   </section>
    </> 
  )
}
