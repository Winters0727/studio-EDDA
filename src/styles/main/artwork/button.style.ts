import { SCREEN } from "@consts/style";
import styled from "styled-components";

// 아트워크 캐릭터 표정 버튼

export const FaceButtonsWrapper = styled.aside`
  display: flex;
  justify-content: flex-start;
  gap: 20px;

  @media screen and (max-width: ${SCREEN.pc}) {
    flex-direction: column;
    gap: 15px;
    margin-left: 15%;
    margin-bottom: 50px;
  }

  @media screen and (max-width: ${SCREEN.mobileWide}) {
    flex-direction: column;
    gap: 12px;
    margin-left: 0;
    margin-bottom: 40px;

    :nth-child(2) {
      transform: translateX(24px);
    }
  }
`;

export const FaceButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 125px;
  padding: 0;
  border: 5px solid #7a69bc;
  box-sizing: border-box;
  cursor: pointer;

  @media screen and (max-width: ${SCREEN.pc}) {
    width: 120px;
    height: 105px;
  }

  @media screen and (max-width: ${SCREEN.tablet}) {
    width: 105px;
    height: 95px;
  }

  @media screen and (max-width: ${SCREEN.mobileWide}) {
    width: 80px;
    height: 75px;
  }
`;

export const FaceButtonImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

// 아트워크 캐릭터 교채 버튼

export const RhobusButtonsWrapper = styled.div`
  display: grid;
  position: absolute;
  grid-template:
    "a b" 50%
    "c d" 50%;
  gap: 16px;
  transform: rotate(45deg);
  right: 20px;
  bottom: 130px;

  & > :first-child {
    transform: translate(0, 8px);
  }

  & > :nth-child(2) {
    transform: translate(0, 8px);
  }

  & > :nth-child(3) {
    transform: translate(0, 0);
  }

  & > :last-child {
    transform: translate(0, 0);
  }

  @media screen and (max-width: ${SCREEN.pc}) {
    right: min(max(20px, 1150px - 100vw), 140px);
  }

  @media screen and (max-width: ${SCREEN.tablet}) {
    right: calc(100vw - 588px);
    bottom: 90px;
    gap: 12px;

    & > :first-child {
      transform: translate(0, 6px);
    }

    & > :nth-child(2) {
      transform: translate(0, 6px);
    }
  }

  @media screen and (max-width: ${SCREEN.mobileWide}) {
    right: calc((580px - 100vw) / 11 * 7);
    bottom: 60px;
    gap: 8px;

    & > :first-child {
      transform: translate(0, 4px);
    }

    & > :nth-child(2) {
      transform: translate(0, 4px);
    }
  }

  @media screen and (max-width: ${SCREEN.mobile}) {
    right: 140px;
  }
`;

export const RhobusButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  padding: 0;
  border: 8px solid #7a69bc;
  box-sizing: border-box;
  cursor: pointer;

  @media screen and (max-width: ${SCREEN.pc}) {
    width: 72px;
    height: 72px;
    border-width: 6px;
  }

  @media screen and (max-width: ${SCREEN.tablet}) {
    width: 60px;
    height: 60px;
    border-width: 4px;
  }

  @media screen and (max-width: ${SCREEN.mobileWide}) {
    width: 32px;
    height: 32px;
    border-width: 2px;
  }
`;

export const RhobusButtonImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
