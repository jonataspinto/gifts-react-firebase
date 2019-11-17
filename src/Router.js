
import React from 'react';
import { BrowserRouter, Switch, Route,} from "react-router-dom";
import Home from './pages/Home/home';
import GiftList from './pages/GiftList';

export default function Routers() {
  return (
      <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/giftlist" component={GiftList} />
      </Switch>
      </BrowserRouter>
  );
}