import styled from 'styled-components'

export const Button = styled.button`
  border-radius: 8px;
  padding: 12px 24px;
  font-size: 16px;
  border: 2px solid transparent;
  box-sizing: border-box;
  cursor: pointer;
  margin-right: 16px;
`

export const PrimaryButton = styled(Button)`
  background-color: blueviolet;
  color: white;
`

export const SecondaryButton = styled(Button)`
  background-color: transparent;
  color: darkslateblue;
  border: 2px solid darkslateblue;
`