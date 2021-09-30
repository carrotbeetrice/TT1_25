import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ShoppingCart from './components/ShoppingCart';
import HomePage from './components/HomePage';
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/"><HomePage /></Route>
          <Route exact path="/shopping_cart"><ShoppingCart /></Route>

          <Route exact path="/product_list"><ProductList/></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
