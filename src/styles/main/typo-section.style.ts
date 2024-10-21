import styled from "styled-components";

import { COLOR, FONT, SCREEN } from "@consts/style";

export const TypoWrapper = styled.section`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 140px 0;
  background: url(/images/main-section01-bg.png) #b1b3fe33 no-repeat center;
  background-size: cover;

  @media screen and (max-width: ${SCREEN.tablet}) {
    padding: 120px 0;
  }

  @media screen and (max-width: ${SCREEN.mobileWide}) {
    padding-top: 130px;
    padding-bottom: 0;
  }

  @media screen and (max-width: ${SCREEN.mobileNarrow}) {
    padding-top: 130px;
    padding-bottom: 0;
  }
`;

export const TypoBackgroundWrapper = styled.div`
  position: absolute;
  width: 100%;
  max-width: 1440px;
  height: 100%;
  overflow: hidden;

  @media screen and (max-width: ${SCREEN.mobileWide}) {
    position: relative;
    padding-top: calc(400 / 580 * 100%);
  }

  @media screen and (max-width: ${SCREEN.mobile}) {
    position: relative;
    margin-top: calc(280 / 360 * 100%);
  }

  @media screen and (max-width: ${SCREEN.mobileNarrow}) {
    margin-top: calc(200 / 250 * 100%);
  }

  &.scrolled {
    & > img {
      opacity: 1;
      transform: none;
    }
  }
`;

export const TypoBackgroundImage = styled.img`
  position: absolute;
  bottom: 0;

  &:first-child {
    left: 50px;
    width: 501px;
    height: auto;
    opacity: 0;
    transform: translateX(-80px);
    transition: opacity 1s, transform 1s;
    transition-delay: 0.5s;
  }

  &:nth-child(2) {
    left: 350px;
    width: 724px;
    height: auto;
    opacity: 0;
    transform: translateY(80px);
    transition: opacity 1s, transform 1s;
  }

  &:last-child {
    left: 910px;
    width: 454px;
    height: auto;
    opacity: 0;
    transform: translateX(80px);
    transition: opacity 1s, transform 1s;
    transition-delay: 0.5s;
  }

  @media screen and (max-width: 1439px) {
    &:first-child {
      left: calc(50 / 1440 * 100%);
      width: calc(501 / 1440 * 100%);
    }

    &:nth-child(2) {
      left: calc(350 / 1440 * 100%);
      width: calc(724 / 1440 * 100%);
    }

    &:last-child {
      left: calc(910 / 1440 * 100%);
      width: calc(454 / 1440 * 100%);
    }
  }

  @media screen and (max-width: ${SCREEN.tablet}px) {
    &:first-child {
      left: calc(50 / 1440 * 100%);
      width: calc(501 / 1440 * 100%);
    }

    &:nth-child(2) {
      left: calc(350 / 1440 * 100%);
      width: calc(724 / 1440 * 100%);
    }

    &:last-child {
      left: calc(910 / 1440 * 100%);
      width: calc(454 / 1440 * 100%);
    }
  }
`;

export const TypoImage = styled.img`
  margin-top: 120px;
  margin-bottom: 90px;
  width: 692px;
  height: auto;
  filter: drop-shadow(5px 5px 15px #715eef) blur(85px);
  z-index: 2;
  transition: 1s;
  transition-delay: 0.8s;

  @media screen and (max-width: 1439px) {
    width: calc(692 / 1440 * 100%);
    min-width: 426px;
  }

  @media screen and (max-width: ${SCREEN.tablet}) {
    width: calc(426 / 768 * 100%);
    min-width: 286px;
    margin-top: 0;
    margin-bottom: calc(440 / 768 * 100%);
  }

  @media screen and (max-width: ${SCREEN.mobileWide}) {
    width: calc(232 / 360 * 100%);
    min-width: 232px;
    margin-bottom: 80px;
  }

  @media screen and (max-width: ${SCREEN.mobileNarrow}) {
    width: 232px;
    margin-bottom: 70px;
  }

  &.scrolled {
    filter: drop-shadow(5px 5px 15px #715eef) blur(0);
  }
`;

export const TypoTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: ${COLOR.white};
  font-size: 24px;
  font-weight: 800;
  line-height: 35px;
  text-align: center;
  z-index: 2;
  opacity: 0;
  transform: translateY(20px);
  transition: 1s;
  transition-delay: 1s;

  @media screen and (max-width: ${SCREEN.mobileWide}) {
    font-size: ${FONT.mobile.medium};
    line-height: 28px;
  }

  @media screen and (max-width: ${SCREEN.mobileNarrow}) {
    font-size: ${FONT.mobile.normal};
    line-height: 24px;
  }

  &.scrolled {
    opacity: 1;
    transform: none;
  }
`;

export const TypoText = styled.span`
  filter: drop-shadow(5px 5px 10px #715eef);
`;
