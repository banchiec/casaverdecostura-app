import React from "react";  
import { Link } from "react-router-dom";
 

const Total = ({itemCount, total}) => { 
    return (
        <div className="total-container">
          <div className="total">
       <p>Total: ${total}</p>
          </div> 
          <div className="checkout">
          <Link to={"/checkout"}><button className="button is-black" >CHECKOUT</button></Link>
           <button className="button is-white" onClick={() => {}}>CLEAR</button>
          </div>
        </div>
    )

}                           


export default Total; 


