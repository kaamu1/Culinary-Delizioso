import React, { useState, useEffect } from 'react';
import { Row, Col, Container, Button, ButtonGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Routes, Route, useParams } from 'react-router-dom';

import PizzasList from './Admin/PizzasList';
import OrdersList from './Admin/OrdersList';
import AddNewPizza from './Admin/AddNewPizza';
import '../style.css';
import Userlist from './Admin/Userlist';
import EditPizza from './Admin/EditPizza';

const AdminScreen = () => {
  const [activePage, setActivePage] = useState('pizzalist');
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;

  useEffect(() => {
    if (localStorage.getItem('currentUser') === null || !currentUser.isAdmin) {
      window.location.href = '/';
    }
  }, []);

  const renderPage = () => {
    switch (activePage) {
      case 'userlist':
        return <Userlist />;
      case 'pizzalist':
        return <PizzasList />;
      case 'addnewpizza':
        return <AddNewPizza />;
      case 'orderlist':
        return <OrdersList />;
      default:
        return null;
    }
  };

  return (
    <Container>
      <Row>
        <h1 className="text-center bg-dark text-light p-2">Admin Panel</h1>
        <Col md={3} className="text-align-left">
          <ButtonGroup vertical className="custom-button-group">
            <Button
              className="custom-button"
              onClick={() => setActivePage('pizzalist')}
              active={activePage === 'pizzalist'}
            >
              All Pizzas
            </Button>
            <Button
              className="custom-button"
              onClick={() => setActivePage('userlist')}
              active={activePage === 'userlist'}
            >
              All Users
            </Button>
            <Button
              className="custom-button"
              onClick={() => setActivePage('addnewpizza')}
              active={activePage === 'addnewpizza'}
            >
              Add new Pizza
            </Button>
            <Button
              className="custom-button"
              onClick={() => setActivePage('orderlist')}
              active={activePage === 'orderlist'}
            >
              All Orders
            </Button>
          </ButtonGroup>
        </Col>
        <Col md={9}>
          {renderPage()}
          <Routes>
            <Route path="/admin/*" element={<AdminRoutes />} />
          </Routes>
        </Col>
      </Row>
    </Container>
  );
};

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="pizzalist" element={<PizzasList />} />
      <Route path="userlist" element={<Userlist />} />
      <Route path="addnewpizza" element={<AddNewPizza />} />
      <Route path="orderlist" element={<OrdersList />} />
      <Route path="editpizza/:pizzaId" element={<EditPizzaWrapper />} />
    </Routes>
  );
};

const EditPizzaWrapper = () => {
  const { pizzaId } = useParams();

  return <EditPizza pizzaId={pizzaId} />;
};

export default AdminScreen;
