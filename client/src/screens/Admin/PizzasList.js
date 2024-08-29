import React, { useEffect, useState } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "react-bootstrap";
import { deletePizza, getAllPizzas } from "../../actions/pizzaAction";
import Pizza from "../../components/Pizza";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import { Link} from "react-router-dom";

const PizzasList = () => {
  const dispatch = useDispatch();
  
  const pizzasstate = useSelector((state) => state.getAllPizzasReducer);
  const { pizzas, error, loading } = pizzasstate;
  useEffect(() => {
    dispatch(getAllPizzas());
  }, [dispatch]);

  var [counter, setCounter] = useState(1);

  return (
    <>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error error="Something went Wrong." />
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Pizza Image</th>
              <th>Pizza Name</th>
              <th>Prices</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {pizzas &&
              pizzas.map((pizza) => (
                <tr key={pizza._id}>
                  <td>{counter++}</td>
                  <td>
                    <img
                      src={pizza.image}
                      alt="logo"
                      width="100px"
                      height="100px"
                    />
                  </td>
                  <td>{pizza.name}</td>
                  <td>
                    small: {pizza.prices[0]["small"]}
                    <br />
                    medium: {pizza.prices[0]["medium"]}
                    <br />
                    large: {pizza.prices[0]["large"]}
                  </td>
                  <td>{pizza.category}</td>
                  <td>
                    <Link to={`/admin/editpizza/${pizza._id}`}>
                  <AiFillEdit
                    style={{ cursor: "pointer" }}
                  />
                  </Link>
                  &nbsp;
                  <AiFillDelete style={{color:'red', cursor:'pointer'}} 
                  onClick={()=>{dispatch(deletePizza(pizza._id))}}
                  />
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default PizzasList;
