import styled from "styled-components";

import { COLOR, FONT, SCREEN, SCREEN_MAX_WIDTH } from "@consts/style";

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
  max-width: ${SCREEN_MAX_WIDTH};
  height: 70px;
  padding: 15px;

  @media screen and (max-width: ${SCREEN.mobileWide}) {
    height: 50px;
  }
`;

export const HeaderLogo = styled.img`
  width: 70px;
  height: 70px;

  @media screen and (max-width: ${SCREEN.mobileWide}) {
    width: 50px;
    height: 50px;
  }
`;

export const HeaderNavBar = styled.nav<{
  $length: number;
}>`
  display: grid;
  grid-template-columns: repeat(${({ $length }) => $length}, 1fr);
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

  @media screen and (max-width: ${SCREEN.tablet}) {
    display: none;
  }
`;

// 모바일 햄버거 버튼

export const HamburgerMenusWrapper = styled.div<{ $padTop?: number }>`
  display: none;

  @media screen and (max-width: ${SCREEN.tablet}) {
    display: flex;
    position: absolute;
    flex-direction: column;
    background-color: #0e004e;
    padding-top: ${({ $padTop }) => `${$padTop || 0}px`};
    top: 0;
    right: 0;
    width: 0;
    height: 100%;
    transition: width 0.33s ease-in-out;
    z-index: 999;

    & > * {
      display: none;
    }

    &.show {
      width: 100%;

      & > * {
        display: flex;
      }
    }
  }
`;

export const HamburgerMenuHeader = styled.div`
  justify-content: space-between;
  width: 100%;
  max-width: ${SCREEN.tablet};
  height: 100px;
  padding: 15px;
  box-sizing: border-box;

  @media screen and (max-width: ${SCREEN.mobileWide}) {
    height: 80px;
  }
`;

export const HamburgerHeaderLogo = styled.img`
  width: 70px;
  height: 70px;

  @media screen and (max-width: ${SCREEN.mobileWide}) {
    width: 50px;
    height: 50px;
  }
`;

export const HamburgerMenus = styled.ul`
  flex-direction: column;
  color: ${COLOR.white};
  padding: 0 16px;

  & > li:not(:last-child) {
    border-bottom: 1px solid ${COLOR.white};
  }
`;

export const HamburgerMenu = styled.li`
  width: 100%;
  padding: 36px 0;

  & > a {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media screen and (max-width: ${SCREEN.mobile}) {
    padding: 24px 0;
  }
`;

export const HamburgerMenuText = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  text-align: left;

  & > span:first-child {
    font-family: "SUSE";
    font-size: 32px;
    font-weight: 700;
    line-height: 32px;
  }

  & > span:last-child {
    font-size: ${FONT.tablet.normal};
    font-weight: 500;
  }

  @media screen and (max-width: ${SCREEN.mobile}) {
    row-gap: 12px;

    & > span:first-child {
      font-size: 24px;
      line-height: 32px;
    }

    & > span:last-child {
      font-size: ${FONT.mobile.normal};
    }
  }
`;
