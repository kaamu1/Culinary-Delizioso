export const getAllPizzasReducer=(state={pizzas: []},action)=>{
    switch(action.type) {
       case 'Get_Pizzas_Request' : return{
        loading:true,
        ...state
       }
       case "Get_Pizzas_Success" : return{
        loading:false,
        pizzas: action.payload
       }
       case "Get_Pizzas_Failed": return{
        loading:false,
        error: action.payload
       }
       default: return state
    }
}

export const addPizzaReducer=(state={},action)=>{
    switch(action.type) {
       case 'Add_Pizzas_Request' : return{
        loading:true,
        ...state
       }
       case "Add_Pizzas_Success" : return{
        success:true,
        loading:false
       }
       case "Add_Pizzas_Failed": return{
        loading:false,
        error: action.payload
       }
       default: return state
    }
}

export const getPizzaByIdReducer=(state={},action)=>{
    switch(action.type) {
       case 'Get_PizzaById_Request' : return{
        loading:true,
        ...state
       }
       case "Get_PizzaById_Success" : return{
        loading:false,
        pizza:action.payload
       }
       case "Get_PizzaById_Failed": return{
        loading:false,
        error: action.payload
       }
       default: return state
    }
}

export const updatePizzaByIdReducer = (state = {}, action) => {
    switch (action.type) {
      case "Update_PizzaById_Request":
        return {
          ...state,
          loading: true,
        };
      case "Update_PizzaById_Success":
        return {
          updatesuccess: true,
          updateloading: false,
        };
      case "Update_PizzaById_Fail":
        return {
          updateloading: false,
          updateerror: action.payload,
        };
      default:
        return state;
    }
  };