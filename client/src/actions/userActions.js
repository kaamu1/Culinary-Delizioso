import axios from "axios";
import swal from "sweetalert";
export const registerUser=(user)=>async dispatch=>{
    dispatch({type:"User_Register_Request"})

    try {
        const response = await axios.post('/api/users/register',user)
      //  console.log(response);

        dispatch({type:"User_Register_Success"})
    } catch (error) {
        dispatch({type:"User_Register_Failed",payload: error})
    }
}

export const loginUser=(user)=>async dispatch=>{
    dispatch({type:"User_Login_Request"})

    try {
        const response = await axios.post('/api/users/login',user)
        //console.log(response);
        dispatch({type:"User_Login_Success",payload:response.data})
        localStorage.setItem("currentUser",JSON.stringify(response.data))
        window.location.href = "/"
    } catch (error) {
        dispatch({type:"User_Login_Failed",payload: error})
    }
}

export const logoutUser=()=>dispatch=>{
localStorage.removeItem("currentUser")
window.location.href = "/login"
}


export const getAllUsers = () => async (dispatch) => {
    dispatch({ type: "Get_Users_Request" });
    try {
      const response = await axios.get("/api/users/getallusers");
      // console.log(response.data);
      dispatch({ type: "Get_Users_Success", payload: response.data });
    } catch (err) {
      dispatch({ type: "Get_Users_Fail", payload: err });
    }
  };
  
  export const deleteUser = (userid) => async (dispatch) => {
    try {
      await axios.post("/api/users/deleteuser", { userid });
      swal("User Deleted Successfully!", "success");
      window.location.reload();
      // console.log(res);
    } catch (error) {
      swal("Errro while Deleting User");
    }
  };
