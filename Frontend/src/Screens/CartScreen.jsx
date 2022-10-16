import React,{useState,useEffect} from 'react';
import {useParams,useNavigate,useSearchParams, Link} from 'react-router-dom';
import { useContext,useDispatch, useSelector } from 'react-redux';
import {Row , Col , ListGroup,Image,Form,Button,Card} from 'react-bootstrap';
import Message from '../Components/Message';
import {addtocart , removeFromCart} from '../Actions/CartAction';



const Cart = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const navigate =  useNavigate();
  const [search] = useSearchParams();
  //let qty = search.get('qty') ? Number(search.get('qty')): 1 ;
  const {cartItems} = useSelector(state=> state.cart);
  // useEffect(()=>{
  //   if(params.id){
  //     dispatch(addtocart(params.id , qty))
  //   }
   
  // },[])

  const removeFromCartHandler =(id)=>{
      dispatch(removeFromCart(id))
  }

  const checkoutHandler =()=>{
    navigate('/login?redirect=shipping')
}
  return (
    <Row>
      <Col md={8}>
        <h1>Shopping Cart</h1>
        {cartItems.length === 0 ? <Message>Your cart is empty <Link to='/'>Go Back</Link> </Message> : (
          <ListGroup varient='flush'>
            {
              cartItems.map((item)=>(
                <ListGroup.Item>
                  <Row>
                    <Col md={2}>
                      <Image src={item?.Image} alt={item.name} fluid rounded/>
                    </Col>
                    <Col md={3}>
                      <Link to={`/product/${item.product}`}>{item.name}</Link>
                    </Col>
                    <Col md={2}>
                      {item.price}
                    </Col>
                    <Col md={2}>
                    <Form.Control as='select'value={item.qty} onChange={(e)=>{
                      dispatch(addtocart(item.product,Number(e.target.value)))
                    }}>
                      {// this will make an array till the number in count in stock
                      [...Array(item.countInStock).keys()].map((x)=>(
                        <option key={x+1} value={x+1}>
                          {x+1}
                        </option>
                      ))
                      }

                    </Form.Control>
                    </Col>
                    <Col md={2}>
                      <Button type='button' varient='light' onClick={(e)=>{removeFromCartHandler(item.product)}}>
                      <i className='fas fa-trash'></i>
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))
            }
          </ListGroup>
        )}
        
      </Col>

      <Col md={4} >
            <Card className='mt-4'>
              <ListGroup varient='flush' >
                  <ListGroup.Item>
                  <h2>subtotal ({cartItems.reduce((acc,item)=> acc + item.qty , 0)}) items</h2>
                   ${
                    cartItems.reduce((acc,item)=>(acc+item.qty * item.price),0).toFixed(2)
                    }
                  </ListGroup.Item>
              </ListGroup>
              <ListGroup.Item>
                <Button type='button' className='btn-block w-100' disabled={Number(cartItems.length)===0} onClick={checkoutHandler}>Proceed to checkout </Button>
              </ListGroup.Item>
            </Card>
      </Col>
    </Row>
  )
}

export default Cart