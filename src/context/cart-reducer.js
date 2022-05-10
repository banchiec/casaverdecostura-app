 
 export const sumItems = cartItems => { 
     console.log(cartItems)
     return {
       itemCount: cartItems.reduce((total, prod) =>  total + prod.quantity , 0),  
       total: cartItems.reduce((total, prod) => total + (prod.price * prod.quantity) , 0)
     }
 }
  
 
 const cartReducer = (state, action) => {  
     console.log(state.cartItems)
    switch(action.type) {  
        case "ADD_ITEM":  
        if(!state.cartItems.find(item => item._id === action.payload._id)) {
           state.cartItems.push({
               ...action.payload, 
               quantity: 1
           })
        }  
        return {
            ...state, 
            cartItems: [...state.cartItems], 
            ...sumItems(state.cartItems)
        } 
        case "INCREASE": 
        const increaseIndex = state.cartItems.findIndex(item => item._id === action.payload._id);   
        console.log(increaseIndex);
        state.cartItems[increaseIndex].quantity++;  
        return {
            ...state, 
            cartItems: [...state.cartItems], 
            ...sumItems(state.cartItems)
        }         
        default: return state; 
        // case "DECREASE": 
        // const decreaseIndex = state.cartItems.findIndex(item => item._id === action.payload._id);  
        // const product = state.cartItems(decreaseIndex); 
        // if(product.quantity > 1) {
        //     product.quantity--;
        // } 
        // return {
        //     ...state, 
        //     cartItems: [...state.cartItems],  
        //     ...sumItems(state.cartItems)
        // }
        // default: 
        // return state;
    } 
    

     
}  


export default cartReducer; 

