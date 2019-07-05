import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import navbar from "./components/navbar";
import Products from "./components/products";
import Home from "./components/home";
import productdetails from "./components/productdetails";
import notfound from "./components/notfound";
import "./App.css";

class App extends Component {
 render() {
   return (
      <BrowserRouter>
         <Switch>
           <Route exact path="/" component={Home} />
           <Route path="/products" component={Products} />
         </Switch>
      </BrowserRouter>

       

   );
   }
  }

export default App;