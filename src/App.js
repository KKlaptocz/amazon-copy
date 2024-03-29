import React, { useEffect } from "react";
import './App.css';
import Header from "./Header";
import Home from "./Home";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import userEvent from "@testing-library/user-event";

function App() {

  useEffect(()=>{

    

  },[])

  return (
    <Router>
    <div className="App">
    
      <Switch>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/checkout">
          <Header/>
          <Checkout/>
        </Route>
        
        <Route path="/">
          <Header/>
          <Home/> 
        </Route>
      </Switch>
      
    </div>
    </Router>
  );
}

export default App;
