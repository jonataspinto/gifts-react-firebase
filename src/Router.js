
import React from 'react';
import { BrowserRouter, Switch, Route,} from "react-router-dom";
import Home from './pages/Home/home';
import GiftList from './pages/GiftList';
import Nav from './components/NavBar';
import GiftedContainer from './pages/Gifted';

export default function Routers() {
  return (
    <BrowserRouter>
      <Nav routes={['home', 'gifted']} />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" exact component={Home} />
        <Route path="/giftlist" component={GiftList} />
        <Route path="/gifted" component={GiftedContainer}/>
      </Switch>
    </BrowserRouter>
  );
}