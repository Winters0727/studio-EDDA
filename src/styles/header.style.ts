import styled from "styled-components";

import { COLOR, FONT, SCREEN_MAX_WIDTH } from "@consts/style";

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`;

export const MainHeader = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: ${SCREEN_MAX_WIDTH}px;
  height: 70px;
  padding: 15px;
`;

export const HeaderLogo = styled.img`
  width: 70px;
  height: 70px;
`;

export const HeaderNavBar = styled.nav`
  display: grid;
  color: ${COLOR.mainColor};
  font-family: "Pretendard";
  font-size: ${FONT.pc.medium};
  font-weight: 800;
  line-height: 21.6px;

  & > a {
    width: fit-content;
    height: fit-content;
    margin: auto;
  }
`;
