import { useEffect, useState } from "react";
import { Pagination } from "../../components/Pagination/Pagination";
import ProductsService from "../../services/products.service";
import { ContainerAdminPage } from "../admin/AdminStyled";
import { ShowCase } from "../../components/ShowCase/ShowCase";
import CategoriesServices from "./../../services/categories.service";
import { Footer } from "../../components/Footer/Footer";   


const Shopping = () => {
  const [filteredProducts, setfilteredProduct] = useState([]);  
  const [products, setProducts] = useState([]);    
  console.log(products)
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage, setproductPerPage] = useState(12); 
    
 


  let ProductService = new ProductsService();
  const getProducts = () => {
    setLoading(true);
    ProductService.getProducts()
      .then((products) => {
        setProducts(products?.data); 
        setfilteredProduct(products?.data)
        setLoading(false);
      })
      .catch((err) => console.log("Error retreiving products", err));
  };

  const [categories, setCategories] = useState([]);

  let CategoryService = new CategoriesServices();

  const getCategories = () => {
    CategoryService.getCategories()
      .then((categories) => {
        setCategories(categories?.data);
      })
      .catch((err) => console.log("Error retreving categoriessssssss", err));
  };

  useEffect(() => {
    getProducts();
  }, []);  

  useEffect(() => {
    getCategories();
  }, []);

  //Get current products
  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProducts = indexOfLastProduct - productPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProducts,
    indexOfLastProduct
  );

  const handleChangeByName = (e) => {        
    console.log(e.target.id)
    let filteredProductsByName = products.filter(product => e.target.id === product.beloning.idCategory?.name); 
     setfilteredProduct(filteredProductsByName)
  };
    
  const handleChangeBySubName = (e) => {
    let filteredProductsBySubName = products.filter(product => e.target.id === product.beloning.idCategory?.subCategory);  
    console.log(filteredProductsBySubName) 
    setfilteredProduct(filteredProductsBySubName); 
  }

  const paginate = (pageNumuber) => setCurrentPage(pageNumuber);

  return (
    <>  
      <ContainerAdminPage>
        <div class="container-shop">
          <ShowCase
            categories={categories}
            loading={loading}
            products={currentProducts}                         
          /> 

          <Pagination
            productPerPage={productPerPage}
            totalProducts={products.length}
            paginate={paginate}
          ></Pagination>
        </div>
      </ContainerAdminPage>
      <Footer></Footer>
    </>
  );
};
export default Shopping;
