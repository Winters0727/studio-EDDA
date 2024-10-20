import ArtworkCharacterButtons from "./ArtworkCharacterButtons";

import {
  CharacterImage,
  CharacterImageWrapper,
} from "@styles/main/artwork/character-image.style";

import type { FC } from "react";

interface ArtworkCharacterImageProps {
  name: string;
  path: string;
}

const ArtworkCharacterImage: FC<ArtworkCharacterImageProps> = ({
  name,
  path,
}) => {
  return (
    <CharacterImageWrapper>
      <CharacterImage src={path} alt={`${name} 스탠딩 이미지`} />
      <ArtworkCharacterButtons />
    </CharacterImageWrapper>
  );
};

export default ArtworkCharacterImage;
