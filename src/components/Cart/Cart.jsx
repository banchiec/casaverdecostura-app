import React from "react";
import { useContext } from "react";
import { useState, useEffect } from "react";
import { ItemCart2 } from "../ItemCart2/ItemCart2";
import { cartContext } from "../context/CartContext";
import styles from "./styles.module.scss";
export const Cart = () => {
  const [productsLength, setProductsLength] = useState(0);
  const { cartItems, cartOpen, setCartOpen } = useContext(cartContext);
  console.log(cartItems, "son cart items");
  useEffect(() => {
    setProductsLength(
      cartItems?.reduce((previous, current) => previous + current.amount, 0)
    );
  }, [cartItems]);
  const total = cartItems.reduce(
    (previous, current) => previous + current.amount * current.price,
    0
  );
  console.log(total, "total");
  return (
    <div className={styles.cartContainer}>
      <div
        onClick={() => setCartOpen(!cartOpen)}
        className={styles.buttonCartContainer}
      >
        <div className={styles.buttonCart}>
          {!cartOpen ? (
            <svg
              className={styles.open}
              width={"35px"}
              viewBox="0 0 30 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M29.733 6.64651C29.595 6.44711 29.4108 6.28414 29.196 6.17154C28.9813 6.05895 28.7425 6.00009 28.5 6.00001H7.9995L6.2685 1.84501C6.04153 1.29784 5.6572 0.830389 5.16424 0.501923C4.67127 0.173457 4.09187 -0.00123156 3.4995 6.53586e-06H0V3.00001H3.4995L10.6155 20.0775C10.7295 20.3507 10.9218 20.5841 11.1681 20.7483C11.4145 20.9125 11.7039 21 12 21H24C24.6255 21 25.185 20.6115 25.4055 20.028L29.9055 8.02801C29.9905 7.80094 30.0193 7.55664 29.9892 7.31603C29.9592 7.07543 29.8713 6.84569 29.733 6.64651V6.64651Z"
                fill="#F0F0F0"
              />
              <path
                d="M12.75 27C13.9926 27 15 25.9926 15 24.75C15 23.5074 13.9926 22.5 12.75 22.5C11.5074 22.5 10.5 23.5074 10.5 24.75C10.5 25.9926 11.5074 27 12.75 27Z"
                fill="#F0F0F0"
              />
              <path
                d="M23.25 27C24.4926 27 25.5 25.9926 25.5 24.75C25.5 23.5074 24.4926 22.5 23.25 22.5C22.0074 22.5 21 23.5074 21 24.75C21 25.9926 22.0074 27 23.25 27Z"
                fill="#F0F0F0"
              />
            </svg>
          ) : null}
        </div>
        {!cartOpen && (
          <div className={styles.productsNumber}>{productsLength}</div>
        )}
      </div>

      {cartItems && cartOpen && (
        <>
          <div onClick={() => setCartOpen(false)} className={styles.mod}></div>
          <div className={`${styles.cart}`}>
            <div className={styles.cc}></div>
            <div className={styles.continueshop}>
              <svg class="arrow4">
                <path d="M2.2 16L16.7 1.5c.4-.4.4-.9 0-1.3s-.9-.4-1.3 0L.3 15.4c-.4.4-.4.9 0 1.3l15.2 15.1c.2.2.4.3.6.3.2 0 .5-.1.6-.3.4-.4.4-.9 0-1.3L2.2 16z"></path>
              </svg>
              <h3>Seguir comprando</h3>
            </div>
            <hr className={styles.hr} />
            <h2>Mis compras</h2>
            {cartItems.length === 0 ? (
              <p className={styles.cartVacio}>Tu carrito esta vacio</p>
            ) : (
              <>
                <div className={styles.productsContainer}>
                  <div className="modal-close">
                    {cartItems.map((item, i) => (
                      <ItemCart2 key={i} item={item} />
                    ))}
                  </div>
                </div>
              </>
            )}
            <div className={styles.pricecontainer}>
              <h4 className={styles.totalprice}>Total: </h4>
              <p>{`${total}`} EUR</p>
            </div>
            <div className={styles.orderbutton}>
              {cartItems ? <button>Comprar</button> : null}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
