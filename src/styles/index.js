import React from 'react';
import { ThemeProvider } from 'styled-components';
import usePersistedThemeState from '../utils/usePersistedThemeState';
import themes from './themes';
import GlobalStyle from './global';

export const ThemeContext = React.createContext({
  setTheme: () => {},
});

function addThemeProvider(children) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [currentTheme, setCurrentTheme] = usePersistedThemeState(
    'theme',
    'light'
  );

  const handleTheme = () => {
    setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={handleTheme}>
      <ThemeProvider theme={themes[currentTheme]}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default addThemeProvider;
