import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserOrders } from '../actions/orderActions';
import Loading from '../components/Loading';
import Error from '../components/Error';

export default function OrdersScreen() {
  const dispatch = useDispatch();
  const orderState = useSelector((state) => state.getUserOrdersReducer);
  const { orders, error, loading } = orderState;

  useEffect(() => {
    dispatch(getUserOrders());
  }, [dispatch]);

  return (
    <div>
      <h2 style={{ fontSize: '35px', marginBottom: '15px' }}><b>My Orders</b></h2>
      <div className='row justify-content-center'>
        {loading ? (
          <Loading />
        ) : error ? (
          <Error message='Something went wrong.' />
        ) : (
          orders.map((order) => (
            <div className='col-md-8 m-2 p-1' key={order._id} style={{ backgroundColor: 'lightpink' }}>
              <div className='flex-container'>
                <div className='m-1 w-100' style={{ textAlign: 'left' }}> 
                  <h2 style={{ fontSize: '25px' }}><b>Items</b></h2>
                  <hr/>
                  {order.orderItems.map((item) => (
                    <div key={item._id}>
                      <p>
                        {item.name} [{item.variant}] * {item.quantity} = {item.price}
                      </p>
                    </div>
                  ))}
                </div>
                <div className='m-1 w-100' style={{ textAlign: 'left' }}>
                  <h2 style={{ fontSize: '25px' }}><b>Address</b></h2>
                  <hr/>
                  <p>Street: {order.shippingAddress.street}</p>
                  <p>City: {order.shippingAddress.city}</p>
                  <p>Country: {order.shippingAddress.country}</p>
                  <p>Pincode: {order.shippingAddress.pincode}</p>
                </div>
                <div className='w-100 m-1' style={{ textAlign: 'left' }}>
                  <h2 style={{ fontSize: '25px' }}><b>Order Info</b></h2>
                  <hr/>
                  <p>Order Amount: {order.orderAmount}</p>
                  <p>Date: {order.createdAt.substring(0, 10)}</p>
                  <p>Transaction Id: {order.transactionId}</p>
                  <p>Order Id: {order._id}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
