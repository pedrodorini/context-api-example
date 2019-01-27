import styled from 'styled-components'

export const HomeContainer = styled.div`
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ color }) => color };
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
`
export const Container = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`