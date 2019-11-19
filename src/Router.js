
import React from 'react';
import { BrowserRouter, Switch, Route,} from "react-router-dom";
import Home from './pages/Home/home';
import GiftList from './pages/GiftList';
import Nav from './components/NavBar';
import GiftedContainer from './pages/Gifted';
import Login from './pages/Login/login.js';

export default function Routers() {
  return (
    <BrowserRouter>
      <Nav routes={['home', 'gifted']} />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/giftlist" component={GiftList} />
        <Route path="/gifted" component={GiftedContainer}/>
      </Switch>
    </BrowserRouter>
  );
}