import styled from 'styled-components'
import {defaultTheme, typeScale} from "../utils";

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
    background-color: ${defaultTheme.primaryColorHover};
    color: ${defaultTheme.textColorOnPrimary};
  }
  
  &:active {
    background-color: ${defaultTheme.primaryColorActive};
    border-color: ${defaultTheme.primaryColorActive};
    color: ${defaultTheme.primaryColor};
  }
  
  &:focus {
    outline: 3px solid ${defaultTheme.primaryColorHover}
    outline-offset: 2px;
  }
`

export const PrimaryButton = styled(Button)`
  background-color: ${defaultTheme.primaryColor};
  color: ${defaultTheme.textColorOnPrimary};

  &:disabled {
    background-color: ${defaultTheme.disabled};
    color: ${defaultTheme.textOnDisabled};
    cursor: not-allowed;
  }
`

export const SecondaryButton = styled(Button)`
  background: none;
  color: ${defaultTheme.primaryColor};
  border: 2px solid ${defaultTheme.primaryColor};

  &:disabled {
    background-color: transparent;
    border-color: ${defaultTheme.disabled};
    color: ${defaultTheme.disabled};
    cursor: not-allowed;
  }
`
export const TertiaryButton = styled(Button)`
  background-color: transparent;
  color: ${defaultTheme.primaryColor};
  border: 2px solid transparent;

  &:disabled {
    background: none;
    color: ${defaultTheme.disabled};
    cursor: not-allowed;
  }
`