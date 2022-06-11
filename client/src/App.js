import Home from './pages/Home';
import Product from './pages/Product/Product';
import ProductList from './pages/ProductList/ProductList';
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Cart from "./pages/Cart/Cart";
// import Pay from './Pay';
// import Success from './pages/Sucess';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

const App = () => {

  const user = true;

  return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/products/:category">
            <ProductList />
          </Route>
          <Route path="/product/:id">
            <Product />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/login">
            {user ? <Redirect to="/"/> : <Login />}
          </Route>
          <Route path="/register">
          {user ? <Redirect to="/"/> : <Register />}
          </Route>
        </Switch>
      </Router>
  );
};

export default App