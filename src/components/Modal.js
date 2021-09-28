import React from "react";
import styled from "styled-components";
import {typeScale} from "../utils";
import {PrimaryButton} from "./Buttons";
import {CloseIcon} from "./Icons";

const WrapperWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background-color: ${props => props.theme.formElementBackground};
  color: ${props => props.theme.textOnFormElementBackground};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 2px;
  background: ${props => props.theme.formElementBackground};
`

const SignUpHeader = styled.h3`
  font-size: ${typeScale.header3};
`;

const SignUpText = styled.p`
  font-size: ${typeScale.paragraph};
  max-width: 70%;
  text-align: center;
`;

const CloseModalBtn = styled.button`
  position: absolute;
  background: none;
  border: none;
  cursor: pointer;
  right: 40px;
  top: 40px;
  width: 24px;
  padding: 0;
`

export const SignUpModal = () => {
    return (
        <WrapperWrapper>
            <ModalWrapper>
                <SignUpHeader>Sign up</SignUpHeader>
                <SignUpText>Sign up today to get access!</SignUpText>
                <PrimaryButton>Sign up</PrimaryButton>
                <CloseModalBtn aria-label="Close modal">
                    <CloseIcon />
                </CloseModalBtn>
            </ModalWrapper>
        </WrapperWrapper>
    )
}