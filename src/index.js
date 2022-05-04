import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App"; 
import CartContextProvider from "./context/cart-context";
import { BrowserRouter } from "react-router-dom"; 
import {Elements} from "@stripe/react-stripe-js"
import {loadStripe} from "@stripe/stripe-js"; 

const stripePromise = loadStripe(process.env.REACT_APP_PUBLISHABLE_KEY);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>  
    <CartContextProvider> 
      <Elements stripe={stripePromise}>
        <App />
        </Elements>
     </CartContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"crossorigin="anonymous"></link>;
