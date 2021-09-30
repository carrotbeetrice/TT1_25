import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ShoppingCart from "./components/ShoppingCart";
import HomePage from "./components/HomePage";
import ProductList from "./components/ProductList";
import Login from "./components/Login";
import Register from "./components/Register";
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/shopping_cart">
            <ShoppingCart />
          </Route>
          <Route exact path="/product_list">
            <ProductList />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
