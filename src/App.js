import './App.css';
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import Cart from './Component/Cart.js';
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
//import {Container, Row, Col } from "reactstrap";
import ProductPage from './Component/ProductPage.js';

import firebase from "firebase/app";
import "firebase/auth";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//components
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import PageNotFound from "./PageNotFound";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import firebaseConfig from "./firebaseConfig";
//import UserContext from "./Context/UserContext";


firebase.initializeApp(firebaseConfig);

function App() {
  const [cartItem, setCartItem] = useState([]);
  const [user, setUser] = useState(null);

  const addCartItem = (item) => {
    const isAddedItem = cartItem.findIndex(function(eachItem) {
      return eachItem.id === item.id;
    });

    if (isAddedItem !== -1) {
      toast("This item has already been added!", {
        type: "error"
      });
      return;
    }

    setCartItem([...cartItem, item]);
    toast.success("Item added to the Cart");
  };

  const removeItem = (item) => {
    setCartItem(cartItem.filter(singleItem => singleItem.id !== item.id));
  };

  const payNow = () => {
    setCartItem([]);
    toast("Purchase is completed", {
      type: "success"
    });
  };

  return (
    <>
      <Router>
        <ToastContainer />
          <Header user={user} setUser={setUser}/>
          <Switch>
            <Route exact path="/">
              <ProductPage user={user} addCartItem= {addCartItem}/>
            </Route>
            <Route path="/Signin">
              <SignIn user={user} setUser={setUser}/>
            </Route>
            <Route path="/Signup">
              <SignUp user={user} setUser={setUser}/>
            </Route>
            <Route path="/Cart">
              <Cart cartItem={cartItem} removeItem={removeItem} payNow={payNow} />
            </Route>
            <Route path="*" component={PageNotFound} />
          </Switch>
          <Footer />
      </Router>
    </>
  );
}

export default App;
