import axios from "axios"
import swal from "sweetalert";
export const getAllPizzas =()=>async dispatch=>{

    dispatch({type: 'Get_Pizzas_Request'})

    try{
      const response= await axios.get("./api/pizzas/getallpizzas")
     // console.log(response);

      dispatch({type: 'Get_Pizzas_Success', payload: response.data})
    } catch(error){
       
        dispatch({type: 'Get_Pizzas_Failed',payload: error})
    }
}

//payload is a property which is used to carry additional data along with action

export const addPizza = (pizza) => async (dispatch) => {
  dispatch({ type: 'Add_Pizzas_Request' });

  try {
    const response = await axios.post("./api/pizzas/addpizza", {pizza});
    dispatch({ type: 'Add_Pizzas_Success', payload: response.data });
  } catch (error) {
    dispatch({ type: 'Add_Pizzas_Failed', payload: error });
  }
};

export const getPizzaById = (pizzaId) => async (dispatch) => {
  dispatch({ type: 'Get_PizzaById_Request' });
  try {
    const response = await axios.post("./api/pizzas/getpizzabyid", {pizzaId});
    dispatch({ type: 'Get_PizzaById_Success', payload: response.data });
  } catch (error) {
    dispatch({ type: 'Get_PizzaById_Failed', payload: error });
  }
};

export const updatePizza = (updatedPizza) => async (dispatch) => {
  dispatch({ type: "Update_PizzaById_Request" });
  try {
    const response = await axios.post("/api/pizzas/updatepizza", {
      updatedPizza,
    });
    dispatch({ type: "Update_PizzaById_Success", payload: response.data });
    window.location.href = "/admin";
  } catch (err) {
    dispatch({ type: "Update_PizzaById_Fail", payload: err });
  }
};


export const deletePizza = (pizzaId) => async (dispatch) => {
  try {
    await axios.post("/api/pizzas/deletepizza", { pizzaId });
    swal("Pizza Deleted Succss!", "success");
    window.location.href = "/admin";
    // console.log(res);
  } catch (error) {
    swal("Errro While Deleteing Pizza");
  }
};


export const filterPizza = (searchkey, category) => async (dispatch) => {
  let filterdPizza;
  dispatch({ type: "Get_Pizzas_Request" });
  try {
    const res = await axios.get("/api/pizzas/getAllPizzas");
    filterdPizza = res.data.filter((pizza) =>
      pizza.name.toLowerCase().includes(searchkey)
    );
    if (category !== "all") {
      filterdPizza = res.data.filter(
        (pizza) => pizza.category.toLowerCase() === category
      );
    }
    dispatch({ type: "Get_Pizzas_Success", payload: filterdPizza });
  } catch (error) {
    dispatch({ type: "Get_Pizzas_Fail", payload: error });
  }
};
