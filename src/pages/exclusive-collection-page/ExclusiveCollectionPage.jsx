import React, { useEffect, useState }  from "react"; 
import ProductsService from "../../services/products.service"; 
import { Collections } from '../../components/Collections/Collections';     



export const ExclusiveCollectionPage = () => {  

    
    const [product, setProduct] = useState([]);             
    console.log(product)
   let productService = new ProductsService();      
   let getExclusiveCollection = () => {
       productService 
       .getProducts() 
       .then((product) => {  
           console.log(product)
          setProduct(product.data)
       })
   } 
   useEffect(() => {
       getExclusiveCollection()
   }, [])                    


  return (
    <Collections products={product.filter(product => product.collections == "Exclusiva")} ></Collections>
  )
}
