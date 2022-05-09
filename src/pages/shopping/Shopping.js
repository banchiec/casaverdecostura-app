import { useEffect, useState } from 'react';  
import { Pagination } from '../../components/Pagination/Pagination';
import ProductsService  from "../../services/products.service" 
import { ContainerAdminPage } from '../admin/AdminStyled';
import { ShowCase } from "../../components/ShowCase/ShowCase"; 
import CategoriesServices from './../../services/categories.service';   
// import { SideFilterBar } from '../../components/SideFilterBar/SideFilterBar';   
import { Footer } from '../../components/Footer/Footer';
import SidebarShop from './components/SidebarShop/SidebarShop';

const Shopping = (props) => {  
  // const [filteredProducts, setfilteredProduct] = useState([]);   
  const [products, setProducts]  = useState([]);   
  const [loading, setLoading] = useState(false);  
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);  
  const [productPerPage, setproductPerPage] = useState(12); 

  let ProductService = new ProductsService();    
  const getProducts =  () => {  
	 setLoading(true) 
      ProductService 
      .getProducts() 
      .then((products) => { 
       setProducts(products?.data) 
       setFilteredProducts(products?.data)
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
        setCategories(categories?.data)
      })  
      .catch(err => console.log("Error retreving categoriessssssss" , err));
 } 


const handleChange = ((e) => { 
  console.log(e);
  let filteredProducts = products.filter(product => product.beloning.subCategory === e.target.id);  
  setFilteredProducts(filteredProducts)
})
 
 

 useEffect(() => {
	 getProducts() 
	 getCategories()
 }, [])  

 //Get current products  
 const indexOfLastProduct = currentPage * productPerPage; 
 const indexOfFirstProducts = indexOfLastProduct - productPerPage; 
 const currentProducts = filteredProducts.slice(indexOfFirstProducts, indexOfLastProduct);     
 const paginate = (pageNumuber) => setCurrentPage(pageNumuber) 
	return(
		<>   
    <ContainerAdminPage>
      <SidebarShop {...props} handleChange={handleChange}  />
      {/* <SideFilterBar/> */}
        <div className="container-shop" >
          <ShowCase categories={categories}  loading={loading} {...props}   products={filteredProducts}/> 
          <Pagination productPerPage={productPerPage} totalProducts={products.length} paginate={paginate}></Pagination>
          <Footer></Footer> 
        </div>  
    </ContainerAdminPage>
  </>
	)

}
export default Shopping;
