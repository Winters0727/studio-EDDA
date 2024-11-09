import { Helmet } from "react-helmet";

import MainVisual from "@components/intro/MainVisual";
import StudioInfo from "@components/intro/StudioInfo";
// import StudioToon from "@components/intro/StudioToon";
import NewStudioToon from "@components/intro/NewStudioToon";

import { PageWrapper, Page } from "@styles/intro/index.style";

import type { FC } from "react";

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
        {/* <StudioToon /> */}
        <NewStudioToon />
      </Page>
    </PageWrapper>
  );
};

export default IntroPage;
