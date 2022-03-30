import { useEffect, useState } from 'react';  
import { Pagination } from '../../components/Pagination/Pagination';
import ProductsService  from "../../services/products.service" 
import { ContainerAdminPage } from '../admin/AdminStyled';
import { ShowCase } from "../../components/ShowCase/ShowCase"; 
import CategoriesServices from './../../services/categories.service';   
import { SideFilterBar } from '../../components/SideFilterBar/SideFilterBar';   
import { Footer } from '../../components/Footer/Footer';

const Shopping = () => {  
  const [filteredProducts, setfilteredProduct] = useState([]);   
  const [products, setProducts]  = useState([]);  
  const [loading, setLoading] = useState(false); 
  const [currentPage, setCurrentPage] = useState(1);  
  const [productPerPage, setproductPerPage] = useState(12); 

  let ProductService = new ProductsService();    
  const getProducts =  () => {  
	 setLoading(true) 
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


const paginate = (pageNumuber) => setCurrentPage(pageNumuber)

	return(
		<>   
    <ContainerAdminPage>
      <SideFilterBar></SideFilterBar>  
        <div className="container-shop" >
          <ShowCase categories={categories} loading={loading}    products={currentProducts}/> 
          <Pagination productPerPage={productPerPage} totalProducts={products.length} paginate={paginate}></Pagination> 
        </div> 
    </ContainerAdminPage>
   <Footer></Footer>
		</>
	)

}
export default Shopping;
 

 

