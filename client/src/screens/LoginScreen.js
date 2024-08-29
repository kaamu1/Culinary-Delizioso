import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../actions/userActions";
import Error from "../components/Error";
import Loading from "../components/Loading";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginstate=useSelector(state=>state.loginUserReducer);
  const {loading,error}=loginstate;
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      window.location.href="/"
    }
  })

  function login() {
    const user = {
      email,
      password
    };
    dispatch(loginUser(user));
  }

  return (
    <div>
      <div className="row justify-content-center mt-5 ">
        <div className="col-md-5 mt-5 shadow-lg p-3 mb-5 bg-white rounded">
          <h2 className="m-2" style={{ fontSize: "35px" }}>
            Login
          </h2>

          {loading && (<Loading/>)}
          {error && (<Error error="Invalid Credentials"/>)}
          
          <div>
            <div>
              <input
                required
                type="text"
                placeholder="email"
                className="form-control"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div>
              <input
                required
                type="text"
                placeholder="password"
                className="form-control"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>

            <button className="btn mt-3 mb-3" onClick={login}>
              Login
            </button>
            <br/>
            <a href="/register" style={{color:"black"}}>Click Here to Register</a>
          </div>
        </div>
      </div>
    </div>
  );
}
