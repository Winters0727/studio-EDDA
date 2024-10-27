import { SCREEN } from "@consts/style";
import styled from "styled-components";

// 아트워크 캐릭터 표정 버튼
interface RhobusButtonProps {
  $color: string;
}

export const FaceButtonsWrapper = styled.aside`
  display: flex;
  justify-content: flex-start;
  gap: 20px;

  @media screen and (max-width: ${SCREEN.pc}) {
    flex-direction: column;
    gap: 15px;
    margin-left: 60px;
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

export const FaceButton = styled.button<RhobusButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 125px;
  padding: 0;
  border: 5px solid ${({ $color }) => $color};
  box-sizing: border-box;
  cursor: pointer;
  transition: all 1s;

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
  left: min(70vw, calc(288px + 50vw));
  bottom: 70px;
  opacity: 0;
  transition: opacity 1s ease-out;
  transition-delay: 0.8s;
  z-index: 4;

  &.scrolled {
    opacity: 1;
  }

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

  @media screen and (max-width: ${SCREEN.tablet}) {
    bottom: 50px;
    gap: 12px;

    & > :first-child {
      transform: translate(0, 6px);
    }

    & > :nth-child(2) {
      transform: translate(0, 6px);
    }
  }

  @media screen and (max-width: ${SCREEN.mobileWide}) {
    bottom: 40px;
    gap: 8px;

    & > :first-child {
      transform: translate(0, 4px);
    }

    & > :nth-child(2) {
      transform: translate(0, 4px);
    }
  }

  @media screen and (max-width: ${SCREEN.mobileNarrow}) {
    left: 160px;
  }
`;

export const RhobusButton = styled.button<RhobusButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  padding: 0;
  border: 8px solid ${({ $color }) => $color};
  box-sizing: border-box;
  cursor: pointer;

  @media screen and (max-width: ${SCREEN.tablet}) {
    width: 52px;
    height: 52px;
    border-width: 6px;
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
