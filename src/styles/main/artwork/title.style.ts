import styled from "styled-components";

import { FONT, SCREEN } from "@consts/style";

export const TitleWrapper = styled.div`
  display: flex;
  position: relative;
  width: fit-content;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
  padding: 10px 15px;
`;

export const Title = styled.ruby`
  font-family: "Pretendard";
  font-size: 48px;
  font-weight: 800;
  line-height: 48px;
  z-index: 3;

  @media screen and (max-width: ${SCREEN.tablet}) {
    font-size: 40px;
    line-height: 32px;
  }

  @media screen and (max-width: ${SCREEN.mobileWide}) {
    font-size: 24px;
    line-height: 24px;
  }
`;

export const TitleRubyText = styled.rt<{ $color: string }>`
  color: ${({ $color }) => $color};
  font-size: 32px;
  line-height: inherit;

  @media screen and (max-width: ${SCREEN.tablet}) {
    font-size: ${FONT.tablet.subTitle};
  }

  @media screen and (max-width: ${SCREEN.mobileWide}) {
    font-size: ${FONT.mobile.normal};
  }
`;

export const TitleBackground = styled.div<{ $background: string }>`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 22px;
  background-color: ${({ $background }) => $background};

  @media screen and (max-width: ${SCREEN.tablet}) {
    height: 18px;
  }

  @media screen and (max-width: ${SCREEN.mobileWide}) {
    height: 10px;
  }
`;
