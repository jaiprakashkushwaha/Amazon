import React, {useEffect, useState} from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch }
 from "react-router-dom";
 import Checkout from './Checkout';
 import Login from './Login';
import {auth} from "./firebase";
import {useStateValue} from "./StateProvider";
import Payment from './Payment';
import Orders from './Orders';
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";

const promise = loadStripe(
"pk_test_51JlAecSBMncl0F0t5R50bAZdOcFQZo0EuNkussK6hL7CPIUe32i8AwUtkE7WZJ7ft4iin2XRFQuEZEzqs8CspY7J00k4NB1jj0"
);

function App() {
  const [{},dispatch] = useStateValue();


  useEffect(()=> {

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >> ", authUser);

      if(authUser){

        dispatch({
          type : 'SET_USER',
          user:authUser,
        });

      }else{
        dispatch({
          type:'SET_USER',
          user:null,
        });

      }
    });

  },[]);

  return (
    <Router>
       <div className="app">

      <Switch>

        <Route path="/orders">
          <Header/>
          <Orders/>
        </Route>

        <Route path="/login">
          <Header/>
           <Login/>
        </Route>
              <Route path="/checkout">
                <Header/>
                <Checkout/>
              </Route>

        <Route path="/payment">
        <Header />
          <Elements stripe={promise}>
            <Payment/>
          </Elements>
        </Route>
        <Route path="/">
          <Header/>
          <Home />
        </Route>
      </Switch>

    </div>

    </Router>
   
  );
}

export default App;
