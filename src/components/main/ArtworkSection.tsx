import SectionTitle from "@components/commons/SectionTitle";
import useIntersectionObserver from "@hooks/scroll.hook"; // 커스텀 훅 import

import { useArtworkContext } from "@contexts/main/artwork.context";

import ArtworkTitle from "./artwork/ArtworkTitle";
import ArtworkSpeechBubble from "./artwork/ArtworkSpeechBubble";
import ArtworkCharacterButtons from "./artwork/ArtworkCharacterButtons";
import ArtworkFaceButtons from "./artwork/ArtWorkFaceButtons";
import ArtworkCharacterImage from "./artwork/ArtworkCharacterImage";

import {
  ArtworkArticle,
  ArtworkContent,
  ArtworkBackground,
  ArtworkWrapper,
} from "@styles/main/artwork-section.style";

import type { FC } from "react";

const ArtworkSection: FC = () => {
  const IO_THRESHOLD = 0.5;

  const { curChar: char } = useArtworkContext();
  const { targetRefs, entries } = useIntersectionObserver(IO_THRESHOLD);

  return (
    <ArtworkWrapper
      ref={(el) => (targetRefs.current[0] = el as HTMLDivElement)}
      id="artwork"
      className={entries["artwork"] ? "scrolled" : ""}
    >
      <SectionTitle
        text={{
          title: "Art Work",
          subTitle: "Art",
        }}
        color={{
          title: char.color.name,
          subTitle: char.color.name,
          background: char.color.nameBackground,
        }}
        direction="right"
      />
      <ArtworkContent className={entries["artwork"] ? "scrolled" : ""}>
        <ArtworkArticle className={entries["artwork"] ? "scrolled" : ""}>
          <ArtworkTitle
            texts={{
              title: char.name,
              ruby: char.ruby,
            }}
            colors={{
              ruby: char.color.ruby,
              background: char.color.nameBackground,
            }}
          />
          <ArtworkSpeechBubble
            quotation={char.quotation}
            colors={{
              quote: char.color.main,
              strong: char.color.main,
              shadow: char.color.speechBubbleShadow,
            }}
          />
          <ArtworkFaceButtons
            paths={char.imagePaths.faces}
            color={char.color.main}
          />
        </ArtworkArticle>
        <ArtworkCharacterImage
          name={char.name}
          path={char.imagePaths.standing}
          translateX={char.image.translateX}
          className={entries["artwork"] ? "scrolled" : ""}
        />
        <ArtworkCharacterButtons
          color={char.color.main}
          className={entries["artwork"] ? "scrolled" : ""}
        />
      </ArtworkContent>
      <ArtworkBackground $color={char.color.background} />
    </ArtworkWrapper>
  );
};

export default ArtworkSection;
