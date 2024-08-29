import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deliverOrder, getAllOrders } from "./../../actions/orderActions";
import { Table, Button } from "react-bootstrap";
import Loading from "../../components/Loading";
import Error from "../../components/Error";

const OrderList = () => {
  const allOrdersState = useSelector((state) => state.allUserOrdersReducer);
  const { loading, orders, error } = allOrdersState;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllOrders());
  }, [dispatch]);

  const handleDeliverOrder = (orderId) => {
    dispatch(deliverOrder(orderId));
  };

  return (
    <div>
      <h1>Order Lists</h1>
      {loading && <Loading />}
      {error && <Error error="Admin Order request fail" />}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Order Id</th>
            <th>Email</th>
            <th>User ID</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders &&
            orders.map((order) => (
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>{order.email}</td>
                <td>{order.transactionId}</td>
                <td>Rs {order.orderAmount}/-</td>
                <td>{order.createdAt.substring(0, 10)}</td>
                <td>
                  {order.isDeleivered ? (
                    <h6 className="text-success">Delivered</h6>
                  ) : (
                    <Button
                      className="btn-danger"
                      onClick={() => handleDeliverOrder(order._id)}
                    >
                      Deliver
                    </Button>
                  )}
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default OrderList;
