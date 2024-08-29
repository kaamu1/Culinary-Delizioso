import React, { useState } from "react";
import { Modal,Dropdown } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "../actions/cartActions";
import '../style.css';

export default function Pizza({ pizza }) {
  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState("small");
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addToCartHandler = () => {
    dispatch(addToCart(pizza, Number(quantity), variant)); 
  };
  

  return (
    <div className="shadow-lg p-3 mb-5 bg-white rounded">
      <div onClick={handleShow}>
        <h1>{pizza.name}</h1>
        <img
          src={pizza.image}
          className="img-fluid"
          style={{ height: "200px", width: "200px" }}
        />
      </div>

<div className="flex-container">
<div className="w-100 m-1">
    <p className="mb-1 mt-2">Variants</p>
    <Dropdown>
      <Dropdown.Toggle variant="secondary" className="custom-dropdown-toggle">{variant}</Dropdown.Toggle>
      <Dropdown.Menu>
        {pizza.variants && pizza.variants.length > 0 ? (
          pizza.variants.map((variant) => (
            <Dropdown.Item
              key={variant}
              onClick={() => setVariant(variant)}
            >
              {variant}
            </Dropdown.Item>
          ))
        ) : (
          <Dropdown.Item disabled>No variants available</Dropdown.Item>
        )}
      </Dropdown.Menu>
    </Dropdown>
  </div>
        <div className="w-100 m-1 dropdown">
          <p className="mb-1 mt-2">Quantity</p>
          <Dropdown>
            <Dropdown.Toggle variant="secondary" className="custom-dropdown-toggle" >
              {quantity}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {[...Array(10).keys()].map((x, i) => (
                <Dropdown.Item
                  key={i + 1}
                  onClick={() => setQuantity(i + 1)}
                >
                  {i + 1}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>

      <div className="flex-container mt-2">
        <div className="w-100 m-10 ">
          <h1 className="mt:1" style={{ display: "inline-block" }}>
            Prices: {pizza.prices[0][variant] * quantity} Rs/-
          </h1>
        </div>
        <div className="w-100 m-10">
          <button className="btn" onClick={addToCartHandler}>
            ADD TO CART
          </button>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img src={pizza.image} className="img-fluid" style={{ height: "250px" }} />
          <p>{pizza.description}</p>
        </Modal.Body>

        <Modal.Footer>
          <button className="btn" onClick={handleClose}>
            CLOSE
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
