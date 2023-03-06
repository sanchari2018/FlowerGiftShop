import React from "react";

import {
    Container,
    ListGroup,
    ListGroupItem,
    Button,
    CardHeader,
    CardBody,
    Card,
    CardFooter,
    Col,
    Row
  } from "reactstrap";

const Cart=({payNow,removeItem,cartItem})=>
{

    let amount=0;
    cartItem.forEach(item => {
        amount = parseFloat(amount) + parseFloat(item.productPrice);
      });

      const styles = {
        textAlign: 'center',
      };

      const styles1={
        backgroundImage : "url('https://images.pexels.com/photos/7141156/pexels-photo-7141156.jpeg?auto=compress&cs=tinysrgb&w=600')",
        height: '100vh',
      }

      const styles2={
        backgroundImage : "url('https://images.pexels.com/photos/2072169/pexels-photo-2072169.jpeg?auto=compress&cs=tinysrgb&w=600')",
        height :'100vh',
        textAlign: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundPosition : 'center'
      }

      const styles3 = {
        background: 'linear-gradient(to right, #f6d365, #fda085, #f6d365)',
      };


    return(

        <div style={styles1}>
        <Container fluid>
            <h1 style={styles} className="text-white">My Cart</h1>
            <ListGroup>
               {cartItem.map(item=>(
                 <ListGroupItem key={item.id} style={styles3}>
                  <Row>
                   <Col>
                     <img height="100" width="150" src={item.tinyImage} alt=""/>
                   </Col>
                   <Col className="text-center">
                    <div className="text-primary">{item.productName}</div>
                    <span style={{ marginRight: '500px' }}>price :- {item.productPrice}</span>
                    <Button color="danger" onClick={() => removeItem(item)} style={{ marginLeft: '10px' }}>
                        Remove
                    </Button>
                   </Col>
                  </Row>
                 </ListGroupItem>
               )
            )}
            </ListGroup>
            {cartItem.length >= 1 ? (
               <Card className="text-center mt-3">
                <CardHeader>Grand Total</CardHeader>
                <CardBody>
                     Your amount for {cartItem.length} product is {amount}
                </CardBody>
                <CardFooter>
                 <Button color="success" onClick={payNow}>
                       Pay Here
                 </Button>
                </CardFooter>
               </Card>
                ) : (
            <h1 className="text-white" style={styles2}>Cart is empty</h1>
        )}



        
        </Container>
        </div>

        

    )
}


export default Cart;