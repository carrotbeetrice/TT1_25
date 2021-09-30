import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ShoppingCart from './components/ShoppingCart';
import HomePage from './components/HomePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/"><HomePage /></Route>
          <Route path="/shopping_cart"><ShoppingCart /></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
