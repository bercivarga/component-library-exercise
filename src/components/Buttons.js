import styled from 'styled-components'
import {typeScale} from "../utils";

export const Button = styled.button`
  font-style: ${typeScale.paragraph};
  border-radius: 8px;
  padding: 12px 24px;
  font-size: 16px;
  border: 2px solid transparent;
  box-sizing: border-box;
  cursor: pointer;
  margin-right: 16px;
  transition: background-color .2s linear, color .2s linear;
  
  &:hover {
    background-color: ${props => props.theme.primaryColorHover};
    color: ${props => props.theme.textColorOnPrimary};
  }
  
  &:active {
    background-color: ${props => props.theme.primaryColorActive};
    border-color: ${props => props.theme.primaryColorActive};
    color: ${props => props.theme.primaryColor};
  }
  
  &:focus {
    outline: 3px solid ${props => props.theme.primaryColorHover}
    outline-offset: 2px;
  }
`

export const PrimaryButton = styled(Button)`
  background-color: ${props => props.theme.primaryColor};
  color: ${props => props.theme.textColorOnPrimary};

  &:disabled {
    background-color: ${props => props.theme.disabled};
    color: ${props => props.theme.textOnDisabled};
    cursor: not-allowed;
  }
`

export const SecondaryButton = styled(Button)`
  background: none;
  color: ${props => props.theme.primaryColor};
  border: 2px solid ${props => props.theme.primaryColor};

  &:disabled {
    background-color: transparent;
    border-color: ${props => props.theme.disabled};
    color: ${props => props.theme.disabled};
    cursor: not-allowed;
  }
`
export const TertiaryButton = styled(Button)`
  background-color: transparent;
  color: ${props => props.theme.primaryColor};
  border: 2px solid transparent;

  &:disabled {
    background: none;
    color: ${props => props.theme.disabled};
    cursor: not-allowed;
  }
`