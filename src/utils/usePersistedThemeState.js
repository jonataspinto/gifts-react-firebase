import { useState, useEffect } from "react"

const usePersistedThemeState = (key, initialState) =>{
  const [state, setState] = useState(()=> {

    const themeStorage = localStorage.getItem(key)
  
    if(themeStorage){
      return JSON.parse(themeStorage)
    }else {
      return initialState
    }

  })

  useEffect(()=>{
    localStorage.setItem(key, JSON.stringify(state))
  },[key, state])

  return[state, setState]
}

export default usePersistedThemeState;