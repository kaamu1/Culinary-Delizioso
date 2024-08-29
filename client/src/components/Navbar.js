import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../actions/userActions";

export default function Navbar() {
  const cartState = useSelector((state) => state.cartReducer);
  const cartItems = Array.isArray(cartState.cartItems)
    ? cartState.cartItems
    : [];
  const cartItemCount = cartItems.length;

  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;
 const dispatch=useDispatch();
  return (
    <div>
      <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded">
        <a className="navbar-brand" href="/">
          Ship Pizza
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav" style={{ marginLeft: "auto" }}>
            {currentUser ? (
              <div className="dropdown mt-2">
              <a className="dropdown-toggle" style={{color:"black"}} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {currentUser.name}
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              {/* <a className="dropdown-item" href="/profile">My Profile</a>
                <hr/> */}
                <a className="dropdown-item" href="/orders">My Orders</a>
                <hr/>
                <a className="dropdown-item" href="#" onClick={()=>{dispatch(logoutUser())}}><li>LogOut</li></a>
              </div>
            </div>
            ) : (
              <li className="nav-item">
                <a className="nav-link" href="/login">
                  Login
                </a>
              </li>
            )}

            <li className="nav-item">
              <a className="nav-link" href="/cart">
                Cart {cartItemCount}
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
