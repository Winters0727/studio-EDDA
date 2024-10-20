import SectionTitle from "@components/commons/SectionTitle";

import { useArtworkContext } from "@contexts/main/artwork.context";

import ArtworkTitle from "./artwork/ArtworkTitle";
import ArtworkSpeechBubble from "./artwork/ArtworkSpeechBubble";
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
  const { curChar: char } = useArtworkContext();

  return (
    <ArtworkWrapper>
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
      <ArtworkContent>
        <ArtworkArticle>
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
          <ArtworkFaceButtons paths={char.imagePaths.faces} />
        </ArtworkArticle>
        <ArtworkCharacterImage
          name={char.name}
          path={char.imagePaths.standing}
        />
      </ArtworkContent>
      <ArtworkBackground $color={char.color.background} />
    </ArtworkWrapper>
  );
};

export default ArtworkSection;
