import styled from "styled-components";

import { BORDER_RADIUS, COLOR, FONT, SCREEN } from "@consts/style";

export const SpeechBubbleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const SpeechBubbleTextWrapper = styled.div<{
  $image: string;
  $shadow: string;
}>`
  display: flex;
  position: relative;
  width: 100%;
  height: 280px;
  justify-content: center;
  align-items: center;
  background-image: url(${({ $image }) => $image});
  background-size: cover;
  border-radius: ${BORDER_RADIUS.pc};
  box-shadow: 5px 15px 55px 15px ${({ $shadow }) => $shadow};

  &.pc {
    @media screen and (max-width: ${SCREEN.mobileWide}) {
      display: none;
    }
  }

  &.mobile {
    display: none;

    @media screen and (max-width: ${SCREEN.mobileWide}) {
      display: flex;
      height: 180px;
    }
  }
`;

export const SpeechBubbleText = styled.span<{ $color?: string }>`
  font-family: "Pretendard";
  font-size: 28px;
  font-weight: 600;
  line-height: 40px;
  text-align: center;
  z-index: 3;

  & > strong {
    color: ${({ $color }) => $color || COLOR.black};
    font-weight: 800;
  }

  @media screen and (max-width: ${SCREEN.tablet}) {
    font-size: ${FONT.tablet.medium};
    line-height: 32px;
  }

  @media screen and (max-width: ${SCREEN.mobileWide}) {
    font-size: ${FONT.mobile.normal};
    line-height: 24px;
  }
`;

export const SpeechBubbleDoubleQuote = styled.svg<{
  $fill?: string;
  $left?: number;
  $right?: number;
  $top?: number;
  $bottom?: number;
  $rotate?: number;
}>`
  position: absolute;
  fill: ${({ $fill }) => $fill || COLOR.black};
  ${({ $left }) => ($left ? `left: ${$left}px` : "")};
  ${({ $right }) => ($right ? `right: ${$right}px` : "")};
  ${({ $top }) => ($top ? `top: ${$top}px` : "")};
  ${({ $bottom }) => ($bottom ? `bottom: ${$bottom}px` : "")};
  ${({ $rotate }) => ($rotate ? `transform: rotate(${$rotate}deg)` : "")};
  z-index: 3;
`;

export const SpeechBubbleTriangleImage = styled.img`
  width: 40px;
  height: auto;
  margin-left: min(450px, calc(100% - 180px));
  z-index: 3;

  @media screen and (max-width: ${SCREEN.tablet}) {
    margin-left: calc(214px + (100vw - 768px) / 2);
  }

  &.pc {
    @media screen and (max-width: ${SCREEN.mobileWide}) {
      display: none;
    }
  }

  &.mobile {
    display: none;

    @media screen and (max-width: ${SCREEN.mobileWide}) {
      display: flex;
      margin-left: max(90px, calc(135px - (580px - 100vw) * 2 / 3));
    }

    @media screen and (max-width: ${SCREEN.mobile}) {
      display: flex;
      margin-left: max(55px, calc(100vw - 270px));
    }

    @media screen and (max-width: ${SCREEN.mobileNarrow}) {
      display: flex;
      margin-left: 55px;
    }
  }
`;
