import React from 'react';
import { ThemeProvider } from 'styled-components'
import Routers from'./Router';
import { light, dark, GlobalStyle } from './styles/index'
import usePersistedThemeState from './utils/usePersistedThemeState';

const App = ()=>{
  const [theme, setTheme] = usePersistedThemeState('theme', light)

  const handleTheme = ()=> {
    setTheme(theme.title === 'light' ? dark : light)
    console.log(theme);    
  }
  return( 
    <ThemeProvider theme={theme}>
      <GlobalStyle/>    
      <Routers/>
    </ThemeProvider>
  )
}

export default App;
