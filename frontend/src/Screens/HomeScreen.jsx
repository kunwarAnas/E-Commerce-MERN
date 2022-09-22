import React from "react";
import { Col, Row,Container } from "react-bootstrap";
import products from "../products.js";
import Product from "../Components/Product.jsx";
const HomeScreen = () => {
  return (
    <>
      <main className="py-3">
        <Container>
          <h1>Latest Product</h1>
          <Row>
            {products.map((product) => (
              <Col sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        </Container>
      </main>
    </>
  );
};

export default HomeScreen;
