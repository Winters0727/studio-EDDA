import useIntersectionObserver from "@hooks/scroll.hook";

import {
  TypoImage,
  TypoTextWrapper,
  TypoText,
  TypoWrapper,
  TypoBackgroundImage,
  TypoBackgroundWrapper,
} from "@styles/main/typo-section.style";

import ZeusImage from "@assets/images/main/zeus-background.png";
import RokiImage from "@assets/images/main/roki-background.png";
import OdinImage from "@assets/images/main/odin-background.png";
import TypoSvg from "@assets/images/svgs/typo.svg";

import type { FC } from "react";

const TypoSection: FC = () => {
  const { targetRefs, entries } = useIntersectionObserver(0.1);

  return (
    <TypoWrapper
      ref={(el) => (targetRefs.current[0] = el as HTMLDivElement)}
      id="main-visual"
      className={entries["main-visual"] ? "scrolled" : ""}
    >
      <TypoImage
        src={TypoSvg}
        alt="타이포 이미지"
        className={entries["main-visual"] ? "scrolled" : ""}
      />
      <TypoTextWrapper className={entries["main-visual"] ? "scrolled" : ""}>
        <TypoText>
          낙천한 신들의 아이돌 도전기!
          <br />
          신은 존재하며 아이돌을 하고있다!
        </TypoText>
      </TypoTextWrapper>
      <TypoBackgroundWrapper
        className={entries["main-visual"] ? "scrolled" : ""}
      >
        <TypoBackgroundImage src={RokiImage} alt="로키 이미지" />
        <TypoBackgroundImage src={ZeusImage} alt="제우스 이미지" />
        <TypoBackgroundImage src={OdinImage} alt="오딘 이미지" />
      </TypoBackgroundWrapper>
    </TypoWrapper>
  );
};
export default TypoSection;
