import { SCREEN } from "@consts/style";
import styled from "styled-components";

export const ArtworkWrapper = styled.section`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 140px;

  @media screen and (max-width: ${SCREEN.mobileWide}) {
    padding-top: 120px;
  }

  @media screen and (max-width: ${SCREEN.mobileNarrow}) {
    padding-top: 110px;
  }

  & > div:not(:last-child),
  article {
    z-index: 2;
  }
`;

export const ArtworkBackground = styled.div<{
  $color: string;
}>`
  display: flex;
  position: absolute;
  right: 0;
  bottom: 0;
  width: 80%;
  height: 100%;

  &::after {
    position: absolute;
    right: 0;
    content: "";
    width: 100%;
    height: 100%;
    background-color: ${({ $color }) => $color};
    -webkit-clip-path: polygon(100% 0%, 100% 100%, 0% 100%);
    clip-path: polygon(100% 0%, 100% 100%, 0% 100%);
  }

  @media screen and (max-width: ${SCREEN.pc}) {
    width: 100%;
  }
`;

export const ArtworkContent = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0 32px;
  box-sizing: border-box;
  overflow-x: hidden;

  @media screen and (max-width: ${SCREEN.pc}) {
    justify-content: flex-start;
  }

  @media screen and (max-width: ${SCREEN.mobileWide}) {
    padding: 0 16px;
  }
`;

export const ArtworkArticle = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 394px;
  max-width: 630px;

  @media screen and (max-width: ${SCREEN.tablet}) {
    min-width: max(215px, calc(394px - (576px - 75vw) / 188 * 179));
  }

  @media screen and (max-width: ${SCREEN.mobileWide}) {
    min-width: max(215px, 50vw - 10px);
  }
`;
