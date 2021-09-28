import React from "react";
import styled from "styled-components";
import {typeScale} from "../utils";
import {PrimaryButton} from "./Buttons";
import {CloseIcon} from "./Icons";
import {useSpring, animated} from "react-spring";

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
  cursor: default;
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

export const SignUpModal = ({showModal, setShowModal}) => {
    const animation = useSpring({
        opacity: showModal ? 1 : 0,
        transform: showModal ? `translateY(0)` : `translateY(-200%)`,
        position: `absolute`,
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex'
    });

    return (
            <animated.div style={animation}>
                <ModalWrapper>
                    <SignUpHeader>Sign up</SignUpHeader>
                    <SignUpText>Sign up today to get access!</SignUpText>
                    <PrimaryButton>Sign up</PrimaryButton>
                    <CloseModalBtn aria-label="Close modal" onClick={() => setShowModal(false)}>
                        <CloseIcon />
                    </CloseModalBtn>
                </ModalWrapper>
            </animated.div>
    )
}