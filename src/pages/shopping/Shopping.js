import { useEffect, useState } from 'react';  
import { Pagination } from '../../components/Pagination/Pagination';
import ProductsService  from "../../services/products.service"
import { ShowCase } from "../../components/ShowCase/ShowCase";
import CategoriesServices from './../../services/categories.service';  

const Shopping = () => {  
  const [filteredProducts, setfilteredProduct] = useState([]);  
  const [products, setProducts]  = useState([]);  
  const [loading, setLoading] = useState(false); 
  const [currentPage, setCurrentPage] = useState(1);  
  const [productPerPage, setproductPerPage] = useState(10); 

  let ProductService = new ProductsService();    
  const getProducts = async () => {  
	await setLoading(true) 
      ProductService 
      .getProducts() 
      .then((products) => { 
		  console.log(products)
       setProducts(products?.data) 
	   setLoading(false)
      }) 
      .catch(err => console.log("Error retreiving products", err))     
  } 
    
  
 const [categories, setCategories] = useState([]);  

 let CategoryService = new CategoriesServices();  

 const getCategories = () => {
      CategoryService  
      .getCategories() 
      .then((categories) => { 
        console.log(categories)
        setCategories(categories?.data)
      })  
      .catch(err => console.log("Error retreving categoriessssssss" , err));
 }
  

 useEffect(() => {
	 getProducts()
 }, [])  

 useEffect(() => {
	 getCategories()
 }, []) 

 //Get current products 

 
 const indexOfLastProduct = currentPage * productPerPage; 
 const indexOfFirstProducts = indexOfLastProduct - productPerPage; 
 const currentProducts = products.slice(indexOfFirstProducts, indexOfLastProduct);  

	return(
		<>     
  
  <ShowCase categories={categories} loading={loading}    products={currentProducts}> </ShowCase>  
  <Pagination productPerPage={productPerPage} totalProducts={products.length}></Pagination>


		</>
	)

}
export default Shopping;
 

 

