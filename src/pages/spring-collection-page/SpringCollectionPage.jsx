import React, { useEffect, useState } from 'react' 
import ProductsService from '../../services/products.service'  
import { Collections } from '../../components/Collections/Collections';    

export const SpringCollectionPage = () => { 
  
  const [product, setProduct] = useState([]);             
  console.log(product)
 let productService = new ProductsService();      
 let getSpringCollection = () => {
     productService 
     .getProducts() 
     .then((product) => {  
         console.log(product)
        setProduct(product.data)
     })
 }    


 
 useEffect(() => {
  getSpringCollection()
}, [])  


  return (
    <Collections products={product.filter(product => product.collections == "Primavera")} ></Collections>
  )
}
