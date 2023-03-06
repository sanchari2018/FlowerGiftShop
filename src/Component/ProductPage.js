import React from "react";
import {useState,useEffect} from "react";

import {Row,Col,Container} from "reactstrap"

import Axios from "axios";
import CartItem from "./CartItem";
import { faker } from "@faker-js/faker";


const ProductPage=({user,addCartItem})=>
{

    const [product,setProduct] =useState([]);

    const apiKey="PYcRwnI05AXlNq2Jq2b0NzuNekSqmL71J76OZ94iudxF1Q5zgtc1Q2gP"

    const url ="https://api.pexels.com/v1/search?query=flowers&per_page=9&page=1"

    const fetchPhotos = async () => {
        const {data} = await Axios.get(url, {
          headers: {
          Authorization: apiKey
         }
       });

    const {photos}=data;
    const flowerNames = ["Pink Roses", "Lavendar Tulips", "Multi-Colored Roses","Purple Rock Cresses" ,"Red Tulips","Bright Sunflowers","Cherry Blossoms", "Cheerful Daisies","Home Decorant Flowers" ];

    const allProduct = photos.map((photo, index)=> ({
        smallImage: photo.src.large,
        tinyImage: photo.src.small,
        productName: flowerNames[index % flowerNames.length],
        productPrice: faker.commerce.price(),
        id: photo.id,
      }));
  
      setProduct(allProduct);
    };

    useEffect(() => {
        fetchPhotos();
      }, []);

      const styles = {
        backgroundImage: "url('https://images.pexels.com/photos/6341503/pexels-photo-6341503.jpeg?auto=compress&cs=tinysrgb&w=600')",
        height : '100%',
      };


    return(
        <Container fluid style={styles}>
          <h1 className="text-center text-success">Gulmohar</h1>
          <h4 className="text-center" style={{color:"#ccc"}}>An Online Flower Gift Shop</h4>
           <Row>
            {product.map(product=>
            (
                <Col md={4} key={product.id}>
                    <CartItem product={product} addCartItem={addCartItem} user={user}/>
                </Col>
            )
        )}  
           </Row>
        </Container>
    )

}

export default ProductPage;