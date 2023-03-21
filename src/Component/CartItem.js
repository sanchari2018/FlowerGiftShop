import React from 'react';
import { toast } from 'react-toastify';
import {Card,Button,CardImg,CardBody,CardText,CardTitle} from "reactstrap";
import "react-toastify/dist/ReactToastify.css";


const CartItem=({addCartItem,product,user})=>
{

  const handleAddToCart = () => {
    if (user) {
      addCartItem(product);
    } else {
      toast.error('Please log in first');
    }
  };
    return(
        <Card className="mt-2 mb-1" style={{ border: '2px solid black', backgroundColor:'#ccc'}}>
         <CardImg top height="250" width="100%" src={product.smallImage} style={{ objectFit: 'cover' }}/>
         <CardBody className="text-center">
          <CardTitle className="text-black" style={{ fontFamily: 'Arial, sans-serif'}}>{product.productName}</CardTitle>
          <CardText className="secondary text-black" style={{ fontFamily: 'Verdana, sans-serif' }}>
          price: RS {product.productPrice}
          </CardText>
          <Button color="success" className="text-black" onClick={handleAddToCart}>
          Gift Me
        </Button>
         </CardBody>
        </Card>
  );
};
    
export default CartItem;