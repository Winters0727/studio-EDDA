import styled from "styled-components";

import { COLOR, FONT, SCREEN } from "@consts/style";

export const SynopsysWrapper = styled.section<{
  $image: string;
  $opacity: number;
}>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 200px 0;
  row-gap: 90px;
  box-sizing: border-box;
  background: ${({ $image, $opacity }) =>
    `linear-gradient(rgba(255, 255, 255, ${
      1 - $opacity
    }), rgba(255, 255, 255, ${1 - $opacity}), rgba(255, 255, 255, ${
      1 - $opacity
    })), url(${$image})`};
  background-size: cover;

  @media screen and (max-width: ${SCREEN.tablet}) {
    padding: 100px 160px;
  }

  @media screen and (max-width: ${SCREEN.mobileWide}) {
    padding: 120px 16px;
    row-gap: 60px;
  }
`;

export const SynopsysTitleWrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  padding: 0 8px;

  @media screen and (max-width: ${SCREEN.mobileWide}) {
    padding: 0 15px;
  }
`;

export const SynopsysTitleBackground = styled.div`
  position: absolute;
  bottom: 0;
  background-color: ${COLOR.subColor1}80;
  width: 100%;
  height: 16px;

  @media screen and (max-width: ${SCREEN.mobileWide}) {
    height: 10px;
  }

  @media screen and (max-width: 359px) {
    max-width: 160px;
  }
`;

export const SynopsysTitle = styled.span`
  position: inherit;
  font-family: "Pretendard";
  font-size: ${FONT.pc.title};
  font-weight: 900;
  line-height: 44px;
  z-index: 2;

  @media screen and (max-width: ${SCREEN.tablet}) {
    font-size: ${FONT.tablet.title};
  }

  @media screen and (max-width: ${SCREEN.mobileWide}) {
    font-size: ${FONT.mobile.title};
    line-height: 24px;
  }

  &.non-mobile {
    @media screen and (max-width: 359px) {
      display: none;
    }
  }

  &.mobile {
    display: none;

    @media screen and (max-width: 359px) {
      display: flex;
      flex-direction: column;
    }
  }
`;

export const SynopsysParagraph = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #555555;
  font-family: "Pretendard";
  font-size: ${FONT.pc.normal};
  font-weight: 500;
  line-height: 28px;

  @media screen and (max-width: ${SCREEN.tablet}) {
    font-size: ${FONT.tablet.normal};
  }

  @media screen and (max-width: ${SCREEN.mobileWide}) {
    font-size: ${FONT.mobile.normal};
    line-height: 26px;
  }
`;

export const SynopsysText = styled.span`
  text-align: center;
  word-break: keep-all;

  &.non-mobile {
    @media screen and (max-width: 359px) {
      display: none;
    }
  }

  &.mobile {
    display: none;

    @media screen and (max-width: 359px) {
      display: inline;
    }
  }
`;
