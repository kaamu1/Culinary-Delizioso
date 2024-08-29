import React, { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { registerUser } from "../actions/userActions";
import Loading from "../components/Loading";
import Error from "../components/Error";
import Success from "../components/Success";

export default function RegisterScreen() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");
  const registerstate=useSelector(state=>state.registerUserReducer);
  const {error,loading,success}=registerstate;

  const dispatch=useDispatch();
  function register(){
    if(password!==cpassword){
        alert("Passwords not matched")
    }else{
         const user={
            name,
            email,
            password
         }
         console.log(user);
         dispatch(registerUser(user))
    }
  }

  return (
    <div>
      <div className="row justify-content-center mt-5 ">
        <div className="col-md-5 mt-5 shadow-lg p-3 mb-5 bg-white rounded">

           {loading && (<Loading/>)}
           {success && (<Success success="User Registered Successfully."/>)}
           {error && (<Error error="Email Already Registered"/>)}

          <h2 className="m-2" style={{ fontSize: "35px" }}>
            Register
          </h2>
          <div>
            <div>
              <input required type="text" placeholder="name" className="form-control" value={name} onChange={(e)=>{setname(e.target.value)}}/>
            </div>
            <div>
              <input required type="text" placeholder="email" className="form-control" value={email} onChange={(e)=>{setemail(e.target.value)}} />
            </div>
            <div>
              <input required
                type="text"
                placeholder="password"
                className="form-control"
                value={password} onChange={(e)=>{setpassword(e.target.value)}}
              />
            </div>
            <div>
              <input required
                type="text"
                placeholder="confirm password"
                className="form-control"
                value={cpassword} onChange={(e)=>{setcpassword(e.target.value)}}
              />
            </div>
            <button className="btn mt-3 mb-3" onClick={register}>Register</button>
            <br/>
           
            <a href="/login" style={{color:"black"}}>Click Here to Login</a>
          </div>
        </div>
      </div>
    </div>
  );
}
