import { COLOR } from "@consts/style";

import {
  Title,
  TitleBackground,
  TitleRubyText,
  TitleWrapper,
} from "@styles/main/artwork/title.style";

import type { FC } from "react";

interface ArtworkTitleProps {
  texts: {
    title: string;
    ruby?: string;
  };
  colors: {
    ruby?: string;
    background?: string;
  };
}

const ArtworkTitle: FC<ArtworkTitleProps> = ({ texts, colors }) => {
  return (
    <TitleWrapper>
      <Title>
        {texts.title}
        {texts.ruby && (
          <>
            <rp>(</rp>
            <TitleRubyText $color={colors.ruby || COLOR.black}>
              {texts.ruby}
            </TitleRubyText>
            <rp>)</rp>
          </>
        )}
      </Title>
      <TitleBackground $background={colors.background || "transparent"} />
    </TitleWrapper>
  );
};

export default ArtworkTitle;
