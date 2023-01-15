import React, { useEffect } from "react";
import styles from "./styles.module.scss";
import { useContext } from "react";
import { cartContext } from "../context/CartContext";
import { GetColorName } from "hex-color-to-color-name";

export const ItemCart2 = ({ item }) => {
  console.log(item.quantity);
  console.log(item, "item");
  const { addItemtoCart, deleteItemfromCart, cartItems, deleteEntireElement } =
    useContext(cartContext);
  const total = cartItems.reduce(
    (previous, current) => previous + current.amount * current.price,
    0
  );
  console.log(cartItems, "CART ITEMS");
  console.log(total, "total");
  return (
    <>
      <div>
        <div className={styles.cartItem}>
          <img src={`http://localhost:5005/${item.imageUrl}`} alt={item.name} />
          <div className={styles.closecontainer}>
            <svg
              onClick={() => !deleteEntireElement(item)}
              class="cross2"
              viewBox="0 0 50 50 "
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7 .6L6.4 0 3.5 2.9.6 0 0 .6l2.9 2.9L0 6.4l.6.6 2.9-2.9L6.4 7l.6-.6-2.9-2.9z"></path>
            </svg>
          </div>
          <div className={styles.dataContainer}>
            <div className={styles.left}>
              <p>{item.name}</p>
              <span>Cantidad:</span>
              <div className={styles.amountcontainer}>
                <p>{item.amount}</p>
                <div classname={styles.addproduct}>
                  <span onClick={() => !addItemtoCart(item)}>+</span>
                </div>
                <div
                  onClick={() => !deleteItemfromCart(item)}
                  classname={styles.deleteproduct}
                >
                  <span>-</span>
                </div>
              </div>
              <span> Tamaño:</span>
              <div>
                <button className={styles.buttonsize}>{item.sizes}</button>
              </div>
              <span>Colores:</span>
              <button
                className={styles.colorbtn}
                style={{ backgroundColor: `${item.color}` }}
              ></button>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};
