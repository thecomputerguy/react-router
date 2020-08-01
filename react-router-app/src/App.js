import React from 'react';
import {Link, NavLink, Route, Switch} from 'react-router-dom'
import Home from './components/home/Home'
import Category from './components/category/Category'
import Products from './components/products/Products'
import logo from './logo.svg';
import './App.css';
import Admin from './components/admin/Admin';
import Login from './components/login/Login';
import PrivateRoute from './customroutes/PrivateRoute';
import Logout from './components/logout/Logout';
import fakeAuthService from './services/authservice/FakeAuthService';

function App() {
  return (
    <div className="App">
       <nav>
         <ul>
           <li><NavLink to="/">Home</NavLink></li>
           <li><NavLink to="/products">Products</NavLink></li>
           <li><NavLink to="/admin">Admin</NavLink></li>
           <li><NavLink to="/category">Category</NavLink></li>
           <li><NavLink to="/logout">Logout</NavLink></li>
         </ul>
       </nav>
      <Switch>
      <Route exact={true} path="/" component={Home} />
      <Route path="/products" component={Products} />
      <Route path="/login" component={Login}></Route>
      <Route path="/logout" component={Logout}></Route>
      <PrivateRoute path="/admin" component={Admin}></PrivateRoute>
      <Route path="/category" component={Category} />
    </Switch>
    </div>
  );
}

export default App;
