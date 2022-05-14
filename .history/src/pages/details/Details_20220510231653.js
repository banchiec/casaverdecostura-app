import React, { useEffect, useState, useContext } from "react";
import ProductsService from "../../services/products.service";
import { Link } from "react-router-dom";
//import { CartContext } from "../../context/cart-context";
import { Colors } from "../../components/Colors/Colors";
import { useParams } from "react-router-dom";
//import { Gallery } from "../../components/Gallery/Gallery";
import "./Details.css"; 
//import ColorsButtons from "../../components/ColorsButtons/ColorsButtons";
import { DetailsItem } from "./DetailsItem";
import { CartContext } from "../../context/cart-context";
import { Footer } from "../../components/Footer/Footer";
export const Details = (props) => { 
  const ProductService = new ProductsService(); 
  const [productDetails, setProductDetails] = useState(null);  
  const { id } = useParams();
  useEffect(() => {
    getProduct(id);
  }, []);  

  const getProduct = (id) => {
    ProductService.getOneProduct(id)
      .then((data) => {
        setProductDetails(data?.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="content-container">
        {productDetails ? (
          <>  
           <DetailsItem size={productDetails?.size}   productDetails={productDetails} photos={productDetails?.photos} ></DetailsItem>
          </>
        ) : (
          <p>Loading</p>
        )}
        <Footer/>
      </div>
    </>
  );
};