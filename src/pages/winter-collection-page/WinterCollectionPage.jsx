import React, { useEffect, useState } from 'react' 
import ProductsService from '../../services/products.service' 
import { Collections } from '../../components/Collections/Collections';  
import "./WinterCollectionPage.css"


export const WinterCollectionPage = () => {   
   
    const [product, setProduct] = useState([]);             
    console.log(product)
   let productService = new ProductsService();      
   let getWinterCollection = () => {
       productService 
       .getProducts() 
       .then((product) => {  
           console.log(product)
          setProduct(product.data)
       })
   } 
   useEffect(() => {
       getWinterCollection()
   }, [])                                                   
  return ( 
    <>
    <Collections products={product.filter(product => product.collections == "Invierno")} ></Collections> 
    </>
  )
}
    