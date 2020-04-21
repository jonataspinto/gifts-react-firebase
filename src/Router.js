import React from 'react';
import { BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import Home from './pages/Home/home';
import GiftList from './pages/GiftList';
import Nav from './components/NavBar';
import Gifted from './pages/Gifted';
import Login from './pages/Login/login.js';
import {userAuthenticated} from './services/auth'

const PrivateRoute = ({ component: Component, ...rest }) =>(
  <Route
    {...rest}
    render={props =>
      userAuthenticated() ? (
        <Component {...props}/>
      ): (
        <Redirect to={{ path: '/', state:{ from:props.location }}} />
      )
    }
  />
)

const Routers = () =>{
  return (
    <BrowserRouter>
      <Nav/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/giftlist" component={GiftList} />
        <Route path="/gifted" component={Gifted}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Routers