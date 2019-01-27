import React, { Component } from 'react'
import { HomeContainer, Container } from './style.js'
import { ThemeProvider, ThemeConsumer } from '@context/Theme'
import Button from '@components/Button'
import Header from '@components/Header'

class Home extends Component {
  constructor() {
    super()
    this.state = {
      theme: 'light'
    }
  }

  toggleTheme = () => {
    this.setState(state => ({ theme: state.theme === 'light' ? 'dark' : 'light' }))
  }

  render () {
    const { theme } = this.state
    return (
      <ThemeProvider value={({ theme, toggleTheme: this.toggleTheme })}>
        <ThemeConsumer>
          { ({ themes }) => (
            <HomeContainer backgroundColor={themes[theme].backgroundColor} color={themes[theme].color}>
              <Container>
                <Header/>
                <Button/>
              </Container>
            </HomeContainer>
          )}
        </ThemeConsumer>
      </ThemeProvider>
    )
  }
}

export default Home
