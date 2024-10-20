import SectionTitle from "@components/commons/SectionTitle";

import {
  SynopsysTitle,
  SynopsysWrapper,
  SynopsysParagraph,
  SynopsysText,
  SynopsysTitleWrapper,
  SynopsysTitleBackground,
} from "@styles/main/synopsys-section.style";

import SynopsysImage from "@assets/images/main/synopsys-background.png";

import type { FC } from "react";
import { COLOR } from "@consts/style";

const SynopsysSection: FC = () => {
  const OPACITY = 0.15;

  return (
    <SynopsysWrapper $image={SynopsysImage} $opacity={OPACITY}>
      <SectionTitle
        text={{
          title: "Synopsys",
          subTitle: "About",
        }}
        color={{
          background: `${COLOR.subColor1}80`,
        }}
        direction="left"
      />
      <SynopsysTitleWrapper>
        <SynopsysTitle className="non-mobile">
          낙천한 신들의 아이돌 도전기!
        </SynopsysTitle>
        <SynopsysTitle className="mobile">
          <span>낙천한 신들의</span>
          <span>아이돌 도전기!</span>
        </SynopsysTitle>
        <SynopsysTitleBackground />
      </SynopsysTitleWrapper>
      <SynopsysParagraph>
        <SynopsysText className="non-mobile">
          'IDOL'우상이란 본디 신의 형상을 의미한다.
          <br />
          800만은 가볍게 넘어가는 신들이 인간계로 추락한 어떤 세계.
          <br />
          신앙 아래에 신이 존재하는 세계.
          <br />
          <br />
          그리고 신들이 하늘 위에 군림하지 않고 인간의 곁에서 숭배당하는 세계.
          <br />
          매니저, 우상(偶像)이자 우상(IDOL)인 신들을 이끌어주기를...
        </SynopsysText>
        <SynopsysText className="mobile">
          'IDOL'우상이란 본디
          <br />
          신의 형상을 의미한다.
          <br />
          800만은 가볍게 넘어가는 신들이
          <br />
          인간계로 추락한 어떤 세계.
          <br />
          신앙 아래에 신이 존재하는 세계.
          <br />
          <br />
          그리고 신들이 하늘 위에 군림하지 않고
          <br />
          인간의 곁에서 숭배당하는 세계.
          <br />
          매니저, 우상(偶像)이자 우상(IDOL)인 신들을 이끌어주기를...
        </SynopsysText>
      </SynopsysParagraph>
    </SynopsysWrapper>
  );
};

export default SynopsysSection;
