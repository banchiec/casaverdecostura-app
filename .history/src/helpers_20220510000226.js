export const IsInCart = (product, cartItems) => {  
   return cartItems.find(item => item._id === product._id)
} 
const API = "http://localhost:5005/api/pay"; 
 async  function fetchFromAPI(endpoint,opts) {
   const {method, body} = {method: "POST", body: null, ...opts}; 
   const res = await fetch(`${API}/${endpoint}`, {
      method, 
      ...(body && {body: JSON.stringify(body)}), 
      headers: {
         'Content-Type': 'application/json'
      }
   }) 
   return res.json()
} 

export default fetchFromAPI;           
