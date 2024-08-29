import React, { useState } from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { filterPizza } from "../actions/pizzaAction";
const Filters = () => {
  const [searchkey, setsearchkey] = useState("");
  const [category, setcategory] = useState("all");
  const dispatch = useDispatch();
  return (
    <div className="p-3 bg-light">
      <Form>
        <Row>
          <Col>
            <Form.Control
              value={searchkey}
              style={{border:'1px solid black'}}
              onChange={(e) => setsearchkey(e.target.value)}
              placeholder="Search Pizza"
            />
          </Col>
          <Col>
            <select
              className="form-select mb-2 mt-2"
              value={category}
              onChange={(e) => setcategory(e.target.value)}
            >
              <option>All</option>
              <option>veg</option>
              <option>non-veg</option>
            </select>
          </Col>
          <Col>
            <Button
              onClick={() => {
                dispatch(filterPizza(searchkey, category));
              }}
            >
              Search
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default Filters;