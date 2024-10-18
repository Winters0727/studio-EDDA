import ArtworkCharacterButtons from "./ArtworkCharacterButtons";

import {
  CharacterImage,
  CharacterImageWrapper,
} from "@styles/main/artwork/character-image.style";

import type { FC } from "react";

interface ArtworkCharacterImageProps {
  name: string;
  path: string;
  color: string;
  className?: string;
}

const ArtworkCharacterImage: FC<ArtworkCharacterImageProps> = ({
  name,
  path,
  color,
  className
}) => {
  return (
    <CharacterImageWrapper className={className}>
      <CharacterImage src={path} alt={`${name} 스탠딩 이미지`} />
      <ArtworkCharacterButtons color={color}/>
    </CharacterImageWrapper>
  );
};

export default ArtworkCharacterImage;
