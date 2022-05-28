import React, { useEffect, useState, useContext } from "react";
import ProductsService from "../../services/products.service";
import { useParams } from "react-router-dom"; 
import { DetailsItem } from "./DetailsItem";  
import './Details.css'

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
    <div className="content-container-details">
      <div className="content-container-details-section">
        {productDetails ? (
          <>  
           <DetailsItem size={productDetails?.size}   productDetails={productDetails} photos={productDetails?.photos} ></DetailsItem>
          </>
        ) : (
          <p>Loading</p>
        )}
      </div>
      <div>
        <h4>Descripción </h4>
      </div>
    </div>
  );
};
