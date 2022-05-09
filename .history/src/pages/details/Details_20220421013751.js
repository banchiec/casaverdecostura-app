import React, { useEffect, useState, useContext } from "react";
import ProductsService from "../../services/products.service"; 
import { IsInCart } from "../../helpers"; 
import { CartContext } from "../../context/cart-context";
import { useParams } from "react-router-dom";
import { Gallery } from "../../components/Gallery/Gallery";
import "./Details.css";
import ColorsButtons from "../../components/ColorsButtons/ColorsButtons";
export const Details = (props) => {
  console.log(props);
  const ProductService = new ProductsService();
  const [productDetails, setProductDetails] = useState(null);   
 
  const { id } = useParams();    
  const {addProduct, cartItems, increase} = useContext(CartContext) 
  let product;


  useEffect(() => {
    getProduct(id); 

  }, []);  


  useEffect(() => { 
   setProductDetails()
  }, [])

  const getProduct = (id) => {
    ProductService.getOneProduct(id)
      .then((data) => {
        setProductDetails(data?.data);
      })
      .catch((err) => console.log(err));
  }; 
      

  if(productDetails) {
    let {name, price} =  productDetails; 
    let producter = {name, price};  
    console.log(producter);  
    product= producter;     
  } 
  console.log(product)
  return (         
    <>
      <div className="content-container">
        {productDetails ? (
          <>
            <Gallery photos={productDetails.photos}></Gallery>
            <div className="product-info">
              <p className="product-name">{productDetails?.name}</p>
              <span className="product-price">{productDetails?.price}.00 EUR</span>
              {
                !IsInCart(product, cartItems) && <button className='shop-button' onClick={() => addProduct(product)}>Añadir a la cesta</button>
              }
              {
                IsInCart(product, cartItems) && <button  onClick={() => increase(product)}>ADD MORE</button>
              }
              <p className="product-description">
                {productDetails?.description}
              </p>
              <br />
              <hr />
              <select>
                {productDetails?.size.map((item, i) => {
                  return (
                    <>
                      <option className="option-size">{item}</option>
                    </>
                  );
                })}
              </select>
              <hr />    
              
              <p>Envios, cambios y devoluciones</p>
            </div>
          </>
        ) : (
          <p>Loading</p>
        )}
      </div>
    </>
  );
};