import React from 'react';
import { BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import {
  Home,
  GiftList,
  Gifted,
  Login,
} from './pages';
import {userAuthenticated} from './services/auth'
import { Layout } from './components/modules';

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
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/giftlist" component={GiftList} />
          <Route path="/gifted" component={Gifted}/>
        </Switch> 
      </Layout>
    </BrowserRouter>
  );
}

export default Routers