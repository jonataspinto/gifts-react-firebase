import { useState, useEffect } from 'react';

const usePersistedThemeState = (key, initialState) => {
  const [state, setState] = useState(() => {
    return localStorage.getItem(key) || initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, state);
  }, [key, state]);

  return [state, setState];
};

export default usePersistedThemeState;
