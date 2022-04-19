export const IsInCart = (product, cartItems) => { 
   return cartItems.find(item => item.id === product.id)
}