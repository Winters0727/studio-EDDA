import styled from "styled-components";

import { COLOR, FONT, SCREEN } from "@consts/style";

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 64px;
  font-family: "SUSE";

  @media screen and (max-width: ${SCREEN.tablet}) {
    height: 61px;
  }

  @media screen and (max-width: ${SCREEN.mobileWide}) {
    font-size: ${FONT.mobile.header};
    height: 34px;
  }
`;

export const TitleTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 0 15px;
`;

export const TitleText = styled.span<{ $color?: string }>`
  color: ${({ $color }) => $color || COLOR.mainColor};
  font-size: ${FONT.pc.header};
  font-weight: 600;
  line-height: 48px;
  z-index: 999;

  @media screen and (max-width: ${SCREEN.tablet}) {
    font-size: ${FONT.tablet.header};
  }

  @media screen and (max-width: ${SCREEN.mobileWide}) {
    font-size: ${FONT.mobile.header};
    line-height: 32px;
  }

  @media screen and (max-width: ${SCREEN.mobileNarrow}) {
    font-size: 28px;
  }
`;

export const TitleBackground = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 35px;

  @media screen and (max-width: ${SCREEN.mobileWide}) {
    height: 25px;
  }

  @media screen and (max-width: ${SCREEN.mobileNarrow}) {
    height: 15px;
  }
`;

export const TItleBackgroundBottom = styled.div<{
  $background?: string;
  $edge?: string;
}>`
  height: 100%;

  &.middle {
    width: 100%;
    padding: 0 15px;
    background-color: ${({ $background }) => $background || COLOR.subColor1};
  }

  &.edge {
    width: 6px;
    background-color: ${({ $edge }) => $edge || COLOR.mainColor};
  }
`;

export const TagWrapper = styled.div`
  margin-top: auto;
  min-width: 28px;
  height: 35px;

  @media screen and (max-width: ${SCREEN.mobileWide}) {
    height: 25px;
  }

  @media screen and (max-width: ${SCREEN.mobileNarrow}) {
    height: 15px;
  }
`;

export const Tag = styled.div<{ $tag?: string }>`
  display: flex;
  background-color: ${({ $tag }) => $tag || COLOR.mainColor};
  color: ${COLOR.white};

  &.left {
    padding: 5px 0px 5px 5px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;

    @media screen and (max-width: ${SCREEN.mobileWide}) {
      padding: 2px 0px 2px 2px;
    }
  }

  &.right {
    padding: 5px 5px 5px 0px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;

    @media screen and (max-width: ${SCREEN.mobileWide}) {
      padding: 2px 2px 2px 0px;
    }
  }
`;

export const TagText = styled.span`
  font-size: 14px;
  font-weight: 300;
  line-height: 14px;

  @media screen and (max-width: ${SCREEN.mobileWide}) {
    font-size: 8px;
  }
`;