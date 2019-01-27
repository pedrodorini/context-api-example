import React from 'react'

const ThemeContext = React.createContext(false)

export const ThemeProvider = props =>
  <ThemeContext.Provider value={props.value}>
    { props.children }
  </ThemeContext.Provider>

export const ThemeConsumer = ThemeContext.Consumer