import React, { Component } from 'react'
import { HomeContainer, Container } from './style.js'
import { ThemeProvider } from '@context/Theme'
import Button from '@components/Button'
import Header from '@components/Header'

class Home extends Component {
  constructor() {
    super()
    this.state = {
      theme: 'light',
      themes: {
        dark: { backgroundColor: '#555555', color: '#FFFFFF' },
        light: { backgroundColor: '#F5F5F5', color: '#000000' }
      }
    }
  }

  toggleTheme = () => {
    this.setState(state => ({ theme: state.theme === 'light' ? 'dark' : 'light' }))
  }

  render () {
    const { theme, themes } = this.state
    return (
      <ThemeProvider value={({ themes, theme, toggleTheme: this.toggleTheme })}>
        <HomeContainer backgroundColor={themes[theme].backgroundColor} color={themes[theme].color}>
          <Container>
            <Header/>
            <Button/>
          </Container>
        </HomeContainer>
      </ThemeProvider>
    )
  }
}

export default Home
