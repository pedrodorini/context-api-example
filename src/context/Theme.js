import React from 'react'

const ThemeContext = React.createContext(false)

export const ThemeProvider = ({ children, value }) =>
  <ThemeContext.Provider value={value}>
    { children }
  </ThemeContext.Provider>

export const ThemeConsumer = ThemeContext.Consumer