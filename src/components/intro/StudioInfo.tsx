import SectionTitle from "@components/commons/SectionTitle";

import useIntersectionObserver from "@hooks/scroll.hook"; // 커스텀 훅 import

import {
  StudioInfoBox,
  StudioInfoWrapper,
  SubTitle,
  IntroBoxWrapper,
  IntroHarfBoxLeft,
  IntroHarfBoxRight,
  StudioLogo,
  IntroFullBox,
  FullBoxLogo,
  StudioVisualBehind,
  StudioVisualFoward,
  StarsLeft,
  StarsRight,
} from "@styles/intro/index.style";

import type { FC } from "react";

const StudioInfo: FC = () => {
  const IO_THRESHOLD = 0.4;

  const { targetRefs, entries } = useIntersectionObserver(IO_THRESHOLD);

  return (
    <StudioInfoBox>
      <StudioInfoWrapper
        ref={(el) => (targetRefs.current[0] = el)}
        id="studio-title"
        className={entries["studio-title"] ? "scrolled" : ""}
      >
        <SectionTitle
          text={{
            title: "Studio EDDA",
            subTitle: "About",
          }}
          direction="left"
        />

        <SubTitle>자신의 경험과 이상을 꿈꾸어라</SubTitle>

        <IntroBoxWrapper>
          <IntroHarfBoxLeft
            ref={(el) => (targetRefs.current[1] = el)}
            id="studio-left"
            className={entries["studio-left"] ? "scrolled" : ""}
          >
            <StudioLogo>
              <img src="/images/studio-logo-2.png" alt="Studio EDDA" />
            </StudioLogo>
            <p>
              에다라는 이름은 북유럽 신화의 서사집 <strong>에다(Edda)</strong>와
              <br />
              일본어로 가지를 뜻하는 <strong>에다(えだ)</strong>에서 따왔습니다.
            </p>
          </IntroHarfBoxLeft>
          <IntroHarfBoxRight
            ref={(el) => (targetRefs.current[2] = el)}
            id="studio-right"
            className={entries["studio-right"] ? "scrolled" : ""}
          >
            <StudioLogo>
              <img src="/images/studio-logo-1.png" alt="Studio EDDA" />
            </StudioLogo>
            <p>
              스튜디오 에다의 로고는{" "}
              <strong>
                가지처럼 나뉘어가는
                <br />
                수많은 이야기
              </strong>
              의 모습을 상징합니다.
            </p>
          </IntroHarfBoxRight>
        </IntroBoxWrapper>

        <IntroFullBox
          ref={(el) => (targetRefs.current[3] = el)}
          id="studio-full"
          className={entries["studio-full"] ? "scrolled" : ""}
        >
          <FullBoxLogo>
            <StarsLeft />
            <img src="/images/studio-logo-full.png" alt="Studio EDDA" />
            <StarsRight />
          </FullBoxLogo>
          <p>
            <b>상상 그 자체</b>를 현실로 만들어내는 <br />
            <strong>스튜디오 에다</strong>가 되겠습니다.
          </p>
        </IntroFullBox>
      </StudioInfoWrapper>
      <StudioVisualBehind
        className={entries["studio-full"] ? "scrolled" : ""}
      ></StudioVisualBehind>
      <StudioVisualFoward
        className={entries["studio-full"] ? "scrolled" : ""}
      ></StudioVisualFoward>
    </StudioInfoBox>
  );
};

export default StudioInfo;
