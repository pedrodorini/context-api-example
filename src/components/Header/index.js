import React from 'react'
import { ThemeConsumer } from '@context/Theme'

const Header = () => (
  <ThemeConsumer>
    { ({ theme }) => <h1>Now the theme is { theme }</h1> }
  </ThemeConsumer>
)

export default Header
