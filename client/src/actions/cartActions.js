export const addToCart = (pizza, quantity, variant) => (dispatch, getState) => {
    var cartItem = {
      name: pizza.name,
      _id: pizza._id,
      image: pizza.image,
      variant: variant,
      quantity: Number(quantity),
      prices: pizza.prices,
      price: pizza.prices[0][variant] * quantity,
    }

    if(cartItem.quantity>10){
        alert('You Cannot add more than 10 quantities.')
    }
    else{
        if(cartItem.quantity<=0){
            dispatch({ type: "Delete_From_Cart", payload:pizza});
        }
        else{
            dispatch({ type: 'ADD_TO_CART', payload: cartItem });
        }
    }
    
  
    try {
      const cartItems = getState().cartReducer.cartItems;
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
    } catch (error) {
      
      console.error('Error saving cart items to local storage:', error);
    }
  };

  export const deleteFromCart =(pizza)=>(dispatch,getState) =>{

    dispatch({ type: "Delete_From_Cart", payload:pizza})
    const cartItems = getState().cartReducer.cartItems;
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }

  //payload carries the data along with action
  