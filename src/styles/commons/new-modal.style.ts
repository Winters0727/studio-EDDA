import styled, { keyframes } from "styled-components";

const showModalAnimation = keyframes`
  0% {
    opacity: 0;
    z-index: -1;
  }

  1% {
    z-index: 1000;
  }

  100% {
    opacity: 1;
    z-index: 1000;
  }
`;

const hideModalAnimation = keyframes`
  0% {
    opacity: 1;
    z-index: 1000;
  }

  99% {
    opacity: 0;
  }

  100% {
    opacity: 0;
    z-index: -1;
  }
`;

export const ModalContainer = styled.div<{
  $top: number;
  $toggleTime?: number;
  $verticalAlign?: string;
  $horizontalAlign?: string;
}>`
  display: flex;
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: ${({ $top }) => $top}px;
  opacity: 0;
  z-index: -1;

  ${({ $horizontalAlign }) =>
    $horizontalAlign ? `justify-content: ${$horizontalAlign};` : ""}
  ${({ $verticalAlign }) =>
    $verticalAlign ? `align-items: ${$verticalAlign};` : ""}

  &.show {
    animation: ${showModalAnimation} ${({ $toggleTime }) => $toggleTime || 1}s
      forwards;
  }

  &.hide {
    animation: ${hideModalAnimation} ${({ $toggleTime }) => $toggleTime || 1}s
      forwards;
  }
`;

export const ModalBackground = styled.div<{
  $backgroundColor?: string;
  $opacity?: number;
}>`
  display: flex;
  width: 100%;
  height: 100%;
  z-index: 1001;

  ${({ $backgroundColor }) =>
    $backgroundColor ? `background-color: ${$backgroundColor};` : ""}
  ${({ $opacity }) => ($opacity ? `opacity: ${$opacity};` : "")}
`;

export const ModalWrapper = styled.article<{
  $left?: number;
  $right?: number;
  $top?: number;
  $bottom?: number;
  $width?: number | string;
  $height?: number | string;
  $margin?: number;
  $padding?: number;
  $verticalAlign?: boolean;
  $horizontalAlign?: boolean;
}>`
  display: flex;
  position: absolute;
  z-index: 1002;

  ${({ $left, $horizontalAlign }) =>
    $left && !$horizontalAlign ? `left: ${$left}px;` : ""}
  ${({ $right, $horizontalAlign }) =>
    $right && !$horizontalAlign ? `right: ${$right}px;` : ""}
  ${({ $top, $verticalAlign }) =>
    $top && !$verticalAlign ? `top: ${$top}px;` : ""}
  ${({ $bottom, $verticalAlign }) =>
    $bottom && !$verticalAlign ? `bottom: ${$bottom}px;` : ""}

  ${({ $width }) => {
    if ($width) {
      return typeof $width === "number" ? `${$width}px` : $width;
    }

    return "";
  }}
  ${({ $height }) => {
    if ($height) {
      return typeof $height === "number" ? `${$height}px` : $height;
    }

    return "";
  }}


  ${({ $margin }) => ($margin ? `padding: ${$margin}px;` : "")}
  ${({ $padding }) => ($padding ? `padding: ${$padding}px;` : "")}
`;
