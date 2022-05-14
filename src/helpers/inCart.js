
  
  export  const isInCart = (product, cartItems) => {
    return  cartItems.find((productInCart) => productInCart._id === product._id )
  }
 



 