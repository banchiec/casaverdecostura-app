import { createContext, useEffect, useState} from "react";  

 export const cartContext = createContext();  
 export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState(() => { 

        try { 
            
            const productsLocalStorage = localStorage.getItem("cartProducts"); 
            return productsLocalStorage ? JSON.parse(productsLocalStorage) : []
            
        } catch (error) {
        return [] 
        }
    }); 
    useEffect(() => {
        localStorage.setItem("cartProducts", JSON.stringify(cartItems))
    }, [cartItems]); 

    const addItemtoCart = (product) => {
     const inCart = cartItems.find((productInCart) => productInCart._id === product._id )
        if(inCart) {
            setCartItems(
                cartItems.map(productInCart => {
                    if(product._id === productInCart._id ){
                        return {...inCart, amount: inCart.amount + 1}
                    }else return productInCart;
                })
            )
        }else {
            setCartItems([...cartItems, {...product, amount: 1}])
        }
    }             
   
    const deleteItemfromCart = (product) => {
        const inCart = cartItems.find((productInCart) => productInCart._id === product._id) 

        if(inCart.amount === 1) {
           setCartItems(
               cartItems.filter((productInCart) => productInCart._id !== product._id)
           );
        }else {
           setCartItems(
               cartItems.map((productInCart) => {
                   console.log(productInCart)
                   if(productInCart._id === product._id){
                       return {...inCart, amount: inCart.amount - 1}
                   }else return productInCart;
               })
           )
        }
    }
    
   return (
      <cartContext.Provider value={{cartItems, addItemtoCart, deleteItemfromCart}}>
          {children}
      </cartContext.Provider>
   )
}
 