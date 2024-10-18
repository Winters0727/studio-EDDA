import {
  TitleWrapper,
  TitleTextWrapper,
  TitleText,
  TitleBackground,
  TItleBackgroundBottom,
  TagWrapper,
  Tag,
  TagText,
} from "@styles/commons/section-title.style";

import type { FC } from "react";

interface TitleProps {
  text: {
    title: string;
    subTitle?: string;
  };
  color?: {
    title?: string;
    subTitle?: string;
    background?: string;
  };
  direction?: "left" | "right";
}

const SectionTitle: FC<TitleProps> = ({ text, color, direction }) => {
  const { title, subTitle } = text;

  return (
    <TitleWrapper>
      {subTitle && direction === "left" && (
        <TagWrapper>
          <Tag className="left" $tag={color?.subTitle}>
            <TagText>{subTitle}</TagText>
          </Tag>
        </TagWrapper>
      )}
      <TitleTextWrapper>
        <TitleText $color={color?.title}>{title}</TitleText>
        <TitleBackground>
          {subTitle && direction === "left" && (
            <TItleBackgroundBottom className="edge" $edge={color?.subTitle} />
          )}
          <TItleBackgroundBottom
            className="middle"
            $background={color?.background}
          />
          {subTitle && direction === "right" && (
            <TItleBackgroundBottom className="edge" $edge={color?.subTitle} />
          )}
        </TitleBackground>
      </TitleTextWrapper>
      {subTitle && direction === "right" && (
        <TagWrapper>
          <Tag className="right" $tag={color?.subTitle}>
            <TagText>{subTitle}</TagText>
          </Tag>
        </TagWrapper>
      )}
    </TitleWrapper>
  );
};

export default SectionTitle;
