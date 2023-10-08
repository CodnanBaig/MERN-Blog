import React, { createContext, useState } from 'react'

export const TokenContext = createContext();

export const TokenContextProvider = ({children}) => {
  const [isAuth, setIsAuth] = useState(false);
  const [token, setToken] = useState("");

  const login = () => {
    setIsAuth(true);
  }

  const signout = () => {
    setIsAuth(false);
  } 
  return (
    <div>
      <TokenContext.Provider value={{setIsAuth, token, isAuth, setToken}}>
        {children}
      </TokenContext.Provider>
    </div>
  )
}
