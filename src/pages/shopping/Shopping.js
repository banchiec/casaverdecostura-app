import ProductsService  from "../../services/products.service"
import { useEffect, useState } from 'react'; 
import { ShowCase } from "../../components/ShowCase/ShowCase";
import CategoriesServices from './../../services/categories.service';  
 






 const Shopping = () => { 
 
	const [filteredProducts, setfilteredProduct] = useState([]);  
	const [products, setProducts]  = useState([]);    
  let ProductService = new ProductsService();    
  const getProducts = () => {
      ProductService 
      .getProducts() 
      .then((products) => { 
		  console.log(products)
       setProducts(products?.data)
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
                            
 

	return(
		<>     
  
  <ShowCase products={products}> </ShowCase>

		</>
	)

}
export default Shopping 
 

 

