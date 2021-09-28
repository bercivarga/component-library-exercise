import React from "react";
import styled from "styled-components";

export const CloseIconWrapper = styled.svg`
  height: 100%;
  width: 100%;
`

export const CloseIcon = () => {
    return (
        <CloseIconWrapper>
            <path fill="currentColor" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
        </CloseIconWrapper>
    )
}