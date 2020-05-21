import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home, GiftList, Gifted, Login } from './pages';
import { Layout } from './components/modules';

// const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route
//     {...rest}
//     render={props =>
//       userAuthenticated() ? (
//         <Component {...props} />
//       ) : (
//         <Redirect to={{ path: '/', state: { from: props.location } }} />
//       )
//     }
//   />
// );

const Routers = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Layout>
          <Route path="/" exact component={Home} />
          <Route path="/home" component={Home} />
          {/* <PrivateRoute path="/giftlist" component={GiftList} /> */}
          <Route path="/gifted" component={Gifted} />
          <Route path="/giftlist" component={GiftList} />
        </Layout>
      </Switch>
    </BrowserRouter>
  );
};

export default Routers;
