import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPizzas } from "../actions/pizzaAction";
import Filters from "../components/Filters";
import Pizza from "../components/Pizza";
import Loading from "../components/Loading";
import Error from "../components/Error";

export default function HomeScreen() {
  const dispatch = useDispatch();
  const pizzasstate = useSelector((state) => state.getAllPizzasReducer);
  const { pizzas, error, loading } = pizzasstate;
  useEffect(() => {
    dispatch(getAllPizzas());
  }, []);
  return (
    <div>
      
      <Filters/>
      <div className="row justify-content-center">
        {loading ? (
          <Loading/>
        ) : error ? (
         <Error error='Something went Wrong.'/>
        ) : (
          pizzas.map((pizza) => {
            return (
              <div className="col-md-3 m-3"  key={pizza._id}>
                <div>
                  <Pizza pizza={pizza} />
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}