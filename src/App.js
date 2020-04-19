import React from 'react';
import { ThemeProvider } from 'styled-components'
import Routers from'./Router';
import { light, dark, GlobalStyle } from './styles/index'
import usePersistedThemeState from './utils/usePersistedThemeState';
import store from './store';
import {Provider} from 'react-redux'

const App = ()=>{
  const [theme, setTheme] = usePersistedThemeState('theme', light)

  const handleTheme = ()=> {
    setTheme(theme.title === 'light' ? dark : light)
    console.log(theme);    
  }
  return( 
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle/>    
        <Routers/>
      </ThemeProvider>
    </Provider>
  )
}

export default App;
