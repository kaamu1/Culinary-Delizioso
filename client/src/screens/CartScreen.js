import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../actions/cartActions';
import { deleteFromCart } from '../actions/cartActions';
import Checkout from '../components/Checkout';
export default function CartScreen() {
  const cartState = useSelector((state) => state.cartReducer);
  const cartItems = cartState.cartItems;
  var subTotal= cartItems.reduce((x,item)=>x+item.price,0);

  const dispatch=useDispatch();
  return (
    <div>
      <div className='row justify-content-center'>
        <div className='col-md-6'>
          <h2 style={{ fontSize: '40px' }}>My Cart</h2>
          {Array.isArray(cartItems) && cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div className='flex-container' key={item._id}>
                <div className='text-left m-1 w-100'>
                  <h1>{item.name} [{item.variant}]</h1>
                  <h1> Price: {item.quantity} * {item.prices[0][item.variant]} = {item.price}</h1>
                  <h1 style={{display:'inline'}}>Quantity: </h1>
                  <i className="fa fa-plus" aria-hidden="true" onClick={()=>{dispatch(addToCart(item,item.quantity+1,item.variant))}}></i>
                  <b>{item.quantity}</b>
                  <i className="fa fa-minus" aria-hidden="true" onClick={()=>{dispatch(addToCart(item,item.quantity-1,item.variant))}}></i>
                  <hr/>
                </div>
                <div className='m-1 w-100'>
                  <img src={item.image} style={{height:'80px' ,width:'80px'}}/>
                </div>
                <div className='m-1 w-100 mt-4'>
                <i className="fa fa-trash" aria-hidden="true" onClick={()=>{dispatch(deleteFromCart(item))}}></i>
                </div>
              </div>
            ))
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>
        <div className='col-md-4 text-right'>
          <h2 style={{fontSize:'30px'}}><b>SubTotal:  {subTotal} /- </b></h2>
          <Checkout subTotal={subTotal}/>
        </div>
      </div>
    </div>
  );
}
