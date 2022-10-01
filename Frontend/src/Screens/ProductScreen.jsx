import React,{useState,useEffect} from 'react';
import { Link , useParams} from 'react-router-dom';
import { Row,Col,Image,ListGroup,Card,Button ,Container, ListGroupItem} from 'react-bootstrap';
import Rating from '../Components/Rating';
import axios from 'axios';

const ProductScreen = () => {
  const params = useParams();
  const [curProduct , setcurrProducts] = useState({});

 useEffect(()=>{
  const fetch = async ()=>{
    console.log('hello');
    const {data} = await axios.get(`${params.id}`);
    setcurrProducts({...data.product});
  }
  fetch();
 },[params.id])
  
  return (
    <Container className='mt-3'>
      <Row>
        <Col  lg={6} md={4} sm={6}>
          <Image src={curProduct.image} alt={curProduct.name} fluid />
        </Col>
        <Col lg={3} md={4}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2>{curProduct.name}</h2>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating value={curProduct.rating} text={curProduct.numReviews}/>
            </ListGroup.Item>
            <ListGroup.Item>
            Price:${curProduct.price}
          </ListGroup.Item>
          <ListGroup.Item>Desceiption:{curProduct.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col lg={3} md={4}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <Row>
                <Col>Price</Col>
                <Col>${curProduct.price}</Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>Status</Col>
                <Col>{curProduct.countInStock>0?'In Stock':'Out of Stock'}</Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Button className='btn-block w-100' type='button'>Add to cart</Button>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductScreen