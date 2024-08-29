import React,{useState} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import {Row,Form,Col,Button, FormControl} from 'react-bootstrap';
import { addPizza } from '../../actions/pizzaAction';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import Success from '../../components/Success';

const AddNewPizza = () => {
    const [name, setname] = useState('');
    const [category, setcategory] = useState('');
    const [description, setdescription] = useState('');
    const [smallPrice, setsmallPrice] = useState();
    const [mediumPrice, setmediumPrice] = useState();
    const [largePrice, setlargePrice] = useState();
    const [image, setimage] = useState('');

    const addPizzaState= useSelector(state => state.addPizzaReducer) ;
    const {loading,error,success}=addPizzaState;
    const dispatch = useDispatch();

    const submitForm = (e) => {
       e.preventDefault();
       const pizza={name,image,category,description,prices:{
        small:smallPrice,
        medium:mediumPrice,
        large:largePrice
       }
    }
    //console.log(pizza)
    dispatch(addPizza(pizza));
    };
    return (
        <div>
            {loading && (<Loading/>)}
            {error && (<Error error="Add new pizza erorr"/>)}
            {success && (<Success success="Pizza Added Successfully"/>)}
        <Form onSubmit={submitForm} className='bg-light p-4'>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" value={name} onChange={(e)=>setname(e.target.value)}
            placeholder="Enter name" />
          </Form.Group>
  
          <Row className="mb-3 mt-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Small Price</Form.Label>
            <Form.Control 
            type="text" value={smallPrice} onChange={(e)=>setsmallPrice(e.target.value)}
            placeholder="Enter smallPrice"
            />
          </Form.Group>
  
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Medium Price</Form.Label>
                <FormControl
                 type="text" value={mediumPrice} onChange={(e)=>setmediumPrice(e.target.value)}
                 placeholder="Enter mediumPrice"
                />
          </Form.Group>
  
          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Large Price</Form.Label>
            <Form.Control 
             type="text" value={largePrice} onChange={(e)=>setlargePrice(e.target.value)}
             placeholder="Enter largePrice"
            />
          </Form.Group>
        </Row>


          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Image</Form.Label>
            <Form.Control  type="text" value={image} onChange={(e)=>setimage(e.target.value)}
            placeholder="Add image URL" />
          </Form.Group>
        </Row>
  
        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Description</Form.Label>
          <Form.Control  type="text" value={description} onChange={(e)=>setdescription(e.target.value)}
            placeholder="Enter description" />
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Category</Form.Label>
          <Form.Control  type="text" value={category} onChange={(e)=>setcategory(e.target.value)}
            placeholder="Enter category" />
        </Form.Group>
  
        <Button variant="primary" type="submit">
          Add New
        </Button>
      </Form>
        </div>
    )
}

export default AddNewPizza

