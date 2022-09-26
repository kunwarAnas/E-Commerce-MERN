import React from 'react';
import { Link , useParams} from 'react-router-dom';
import { Row,Col,Image,ListGroup,Card,Button ,Container, ListGroupItem} from 'react-bootstrap';
import Rating from '../Components/Rating';
import products from '../products';
const ProductScreen = () => {
  const params = useParams();
  const product = products.find((p)=>p._id === params.id);
  return (
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