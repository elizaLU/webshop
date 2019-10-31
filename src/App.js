import React from "react";
import "./App.css";
import Home from "./components/Home";
import store from "./store";
import { Provider } from "react-redux";
import { Route } from "react-router-dom";
import ProductDetailContainer from "./components/ProductDetailContainer";
import CartContainer from "./components/CartContainer"

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Webshop</h1>
        <Route exact path="/" component={Home} />
        <Route exact path="/products/:id" component={ProductDetailContainer} />
        <Route exact path="/cart" component={CartContainer} />
      </div>
    </Provider>
  );
}

export default App;
