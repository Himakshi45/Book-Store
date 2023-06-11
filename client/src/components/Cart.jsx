import React from "react";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
  Container,
} from "react-bootstrap";
import Message from "./Message";
const Cart = () => {
  return (
    <Container>
      <Row>
        <Col md={8}>
          <h1>Shopping Cart</h1>
          
            <Message>
              Your cart is empty <Link to='/'>Go Back</Link>
            </Message>
        
            <ListGroup variant='flush'>
             
                <ListGroup.Item >
                  <Row>
                    <Col md={2}>
                      <Image  />
                    </Col>
                    <Col md={3}>
                      <Link ></Link>
                    </Col>
                    <Col md={2}></Col>
                    <Col md={2}>
                      <Form.Control
                        as='select'
                       
                        
                      >
                       
                      </Form.Control>
                    </Col>
                    <Col md={2}>
                      <Button
                        type='button'
                        variant='light'
                        
                      >
                        <i className='fas fa-trash'></i>
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
            
            </ListGroup>
        
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h2>
                  Subtotal  items
                </h2>
                INR
                
              </ListGroup.Item>
              <ListGroup.Item>
              <Link to="/checkout">
                <Button
                  type='button'
                  className='btn-block'
                 
                >
                  Proceed To Checkout
                </Button>
                </Link>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Cart;
