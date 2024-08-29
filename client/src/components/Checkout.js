import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import { useDispatch, useSelector } from 'react-redux';
import { placeOrder } from '../actions/orderActions';
import Loading from "../components/Loading";
import Error from "../components/Error";
import Success from "../components/Success";

export default function Checkout({subTotal}) {
    const orderstate=useSelector((state)=>state.placeOrderReducer)
    const {loading,error,success}=orderstate
    const dispatch = useDispatch();
    function tokenHandler(token){
          console.log(token)
          dispatch(placeOrder(token,subTotal))
    }
    return (
        <div>
             {loading && (<Loading/>)}
              {error && <Error error='Something went wrong'/>}
              {success && <Success success='Your Order Placed Successfully.'/>}

            <StripeCheckout amount={subTotal*100}
            shippingAddress
            billingAddress
            token={tokenHandler}
            stripeKey='pk_test_51NP7R5HilTQBnaZnAKyCgtVhcvcae44CkAm6yeGRgJlvJECmN2DLTEDokLewXfTubwBoT8qI46Zlmz4mks60E6WF005TXo2FI4'
            currency='INR'
            >
                <button className='btn'>Pay Now</button>
            </StripeCheckout>
        </div>
    )
}
