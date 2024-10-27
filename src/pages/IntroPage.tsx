import { Helmet } from "react-helmet";

import MainVisual from "@components/intro/MainVisual";
import StudioInfo from "@components/intro/StudioInfo";

import { PageWrapper, Page } from "@styles/intro/index.style";

import type { FC } from "react";
import StudioToon from "@components/intro/StudioToon";

const IntroPage: FC = () => {
  const TITLE = "Studio EDDA - 스튜디오 소개";

  return (
    <PageWrapper>
      <Page>
        <Helmet>
          <title>{TITLE}</title>
        </Helmet>
        <MainVisual />
        <StudioInfo />
        <StudioToon />
      </Page>
    </PageWrapper>
  );
};

export default IntroPage;
