import React,{useState,useEffect} from "react";
import { Col, Row,Container } from "react-bootstrap";
import {useDispatch , useSelector} from 'react-redux';
import { listProducts } from "../Actions/productAction.js";
import Product from "../Components/Product.jsx";
import Loader from "../Components/Loader.jsx";
import Message from "../Components/Message.jsx";

const HomeScreen = () => { 
  const dispatch = useDispatch();
    const productList = useSelector(state => state.productList);
    const{ loading , products , error} = productList;
    //console.log(products);
    useEffect(()=>{
    dispatch(listProducts());
    // const fetch = async()=>{
    //   let {data} = await axios.get('product/all');
    //   //console.log(data.allProduct);
    //   setProducts([...data.allProduct]);
    // }
    // fetch();
  },[])
  return (
    <>
   
   {
    loading ? <Loader/> : error ? <Message variant='danger'>{error}</Message> :
    <main className="py-3">
    <Container>
      <h1>Latest Product</h1>
      <Row>
        {products?.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>

        ))}
      </Row>
    </Container>
   </main>
   }
      
    </>
  );
};

export default HomeScreen;
