import React from 'react'
import { Button } from './style.js'
import { ThemeConsumer } from '../../context/Theme'

const ButtonComponent = () => (
  <ThemeConsumer>
    { ({ themes, theme, toggleTheme }) => 
      <Button
        onClick={toggleTheme}
        backgroundColor={themes[theme].backgroundColor}>
          Change Theme
      </Button>
    } 
  </ThemeConsumer>
)

export default ButtonComponent