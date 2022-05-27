import React, { useEffect, useState } from 'react'
import ProductsService from '../../services/products.service' 
import { Collections } from '../../components/Collections/Collections';   


export const SummerCollectionPage = () => { 
 
    const [product, setProduct] = useState([]);             
    console.log(product)
   let productService = new ProductsService();      
   let getSummerCollection = () => {
       productService 
       .getProducts() 
       .then((product) => {  
           console.log(product)
          setProduct(product.data)
       })
   } 
   useEffect(() => {
       getSummerCollection()
   }, [])                    

  return (
    <Collections products={product.filter(product => product.collections == "Verano")} ></Collections>
  )
}
