import SectionTitle from "@components/commons/SectionTitle";
import {
  IntroMain,
  IntroMainImage,
  IntroMainVisual,
  IntroMainWrapper,
  IntroMainText,
  IntroSubText,
  IntroDetail,
} from "@styles/intro/index.style";
import useIntersectionObserver from "@hooks/scroll.hook";

import type { FC } from "react";

const MainVisual: FC = () => {
  const IO_THRESHOLD = 0.1;

  const { targetRefs, entries } = useIntersectionObserver(IO_THRESHOLD);

  return (
    <IntroMain
      ref={(el) => (targetRefs.current[0] = el)}
      id="main-visual"
      className={entries["main-visual"] ? "scrolled" : ""}
    >
      <IntroMainImage
        className={entries["main-visual"] ? "scrolled" : ""}
      ></IntroMainImage>
      <IntroMainVisual
        className={entries["main-visual"] ? "scrolled" : ""}
      ></IntroMainVisual>
      <IntroMainWrapper className={entries["main-visual"] ? "scrolled" : ""}>
        <IntroMainText> Dream </IntroMainText>
        <IntroSubText> Your </IntroSubText>
        <SectionTitle
          text={{ title: "Xperience", subTitle: "Studio" }}
          direction="left"
        />
        <IntroSubText> and </IntroSubText>
        <SectionTitle
          text={{ title: "Ideal", subTitle: "EDDA" }}
          direction="right"
        />
        <IntroDetail>자신의 경험과 이상을 꿈꾸어라</IntroDetail>
      </IntroMainWrapper>
    </IntroMain>
  );
};

export default MainVisual;
