import React from 'react'

const ThemeContext = React.createContext(false)

const themes = {
  dark: { backgroundColor: '#555555', color: '#FFFFFF' },
  light: { backgroundColor: '#F5F5F5', color: '#000000' }
}

export const ThemeProvider = ({ children, value }) =>
  <ThemeContext.Provider value={({ themes: themes, ...value })}>
    { children }
  </ThemeContext.Provider>

export const ThemeConsumer = ThemeContext.Consumer