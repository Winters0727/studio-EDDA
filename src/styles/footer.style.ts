import styled from "styled-components";

import { COLOR, SCREEN, SCREEN_MAX_WIDTH } from "@consts/style";

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${COLOR.black};
  width: 100%;

  // 페이지 작업 후에 제거해야합니다.
  margin-top: auto;
`;

export const MainFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: ${SCREEN_MAX_WIDTH};
  height: 175px;

  @media screen and (max-width: ${SCREEN.mobileWide}) {
    height: 120px;
  }
`;

export const FooterTextWrapper = styled.div`
  display: flex;
  color: ${COLOR.white};
  font-family: "SUSE";
  font-size: 20px;
  font-weight: 300;
  line-height: 20px;

  @media screen and (max-width: ${SCREEN.mobileWide}) {
    flex-direction: column;
    align-items: center;
    font-size: 12px;
    line-height: 18px;
  }
`;

export const FooterText = styled.span``;
