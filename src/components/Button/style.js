import styled from 'styled-components'

export const Button = styled.button`
  border: 1px solid black;
  background-color: ${({ backgroundColor })=> backgroundColor};
  color: ${({ backgroundColor }) => backgroundColor === '#555555' ? '#FFFFFF' : '#222222'};
  cursor: pointer;
  padding: 5px 10px;
  outline: none;
  transition: .3s ease;
`