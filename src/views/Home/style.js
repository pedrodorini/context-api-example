import styled from 'styled-components'

export const HomeContainer = styled.div`
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ color }) => color };
  display: flex;
  height: 100vh;
  width: 100vw;
  transition: .3s ease;
`
export const Container = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    transition: .3s ease;
  }
`