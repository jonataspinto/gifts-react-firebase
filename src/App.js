import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Routers from './Router';
import addThemeProvider from './styles';

const App = () => {
  return <Provider store={store}>{addThemeProvider(<Routers />)}</Provider>;
};

export default App;
