import React,{useState,useEffect} from 'react';
import {useParams,useNavigate} from 'react-router-dom';
import { Row,Col,Image,ListGroup,Container,Button,Form} from 'react-bootstrap';
import Rating from '../Components/Rating';
import {useDispatch, useSelector } from 'react-redux';
import {listProductsDetails } from '../Actions/productAction';
import { addtocart } from '../Actions/CartAction';
import Loader from '../Components/Loader';
import Message from '../Components/Message';
const ProductScreen = () => {
  const params = useParams();
  const navigate =  useNavigate();
  const [qty , setqty] = useState(1);
  const dispatch = useDispatch();
  const productDetail = useSelector(state => state.productDetail);
  const {loading , product , error } = productDetail;
 useEffect(()=>{
  dispatch(listProductsDetails(params.id));
  // const fetch = async ()=>{
  //   console.log('hello');
  //   const {data} = await axios.get(`${params.id}`);
  //   setcurrProducts({...data.product});
  // }
  // fetch();
 },[dispatch]);

 const handleAddtoCart = ()=>{
  if(params.id){
      dispatch(addtocart(params.id , qty))
      navigate(`/cart/${params.id}?qty=${qty}`);
    }
 }
  
  return (
    <>
    {
      loading ? <Loader/> : error ? <Message>{error}</Message> :
      <Container className='mt-3'>
      <Row>
        <Col  lg={6} md={4} sm={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col lg={3} md={4}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2>{product.name}</h2>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating value={product.rating} text={product.numReviews}/>
            </ListGroup.Item>
            <ListGroup.Item>
            Price:${product.price}
          </ListGroup.Item>
          <ListGroup.Item>Desceiption:{product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col lg={3} md={4}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <Row>
                <Col>Price</Col>
                <Col>${product.price}</Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>Status</Col>
                <Col>{product.countInStock>0?'In Stock':'Out of Stock'}</Col>
              </Row>
            </ListGroup.Item>
            {
              product.countInStock > 0 && (
                <ListGroup.Item>
                  <Row>
                    <Col>Qty</Col>
                    <Col>
                    <Form.Control as='select' value={qty} onChange={(e)=>{
                      setqty(e.target.value)
                    }}>
                      {// this will make an array till the number in count in stock
                      [...Array(product.countInStock).keys()].map((x)=>(
                        <option key={x+1} value={x+1}>
                          {x+1}
                        </option>
                      ))
                      }

                    </Form.Control>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ) 
            }
            <ListGroup.Item>
              <Button className='btn-block w-100' type='button' onClick={handleAddtoCart}>Add to cart</Button>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
    }
    </>
  )
}

export default ProductScreen