export const registerUserReducer= (state={},action)=>{
    switch (action.type) {
        case "User_Register_Request": return{
            loading:true
        }
        case "User_Register_Success": return{
            loading:false,
            success:true
        }
        case"User_Register_Failed": return{
             loading:false,
             error:action.payload
        }
        default: return state
    }
}

export const loginUserReducer= (state={},action)=>{
    switch (action.type) {
        case "User_Login_Request": return{
            loading:true
        }
        case "User_Login_Success": 
            return {
              loading: false,
              success: true,
              currentUser: action.payload,
            }
          
        case"User_Login_Failed": return{
             loading:false,
             error:action.payload
        }
        default: return state
    }
}


export const getAllUsersReducer = (state = { users: [] }, action) => {
    switch (action.type) {
      case "Get_Users_Request":
        return {
          ...state,
          loading: true,
        };
      case "Get_Users_Success":
        return {
          users: action.payload,
          loading: false,
        };
      case "Get_Users_Fail":
        return {
          error: action.payload,
          loading: false,
        };
      default:
        return state;
    }
  };