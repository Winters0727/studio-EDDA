import { useArtworkContext } from "@contexts/main/artwork.context";

import { ARTWORK_BUTTON_IMAGES } from "@consts/main";

import {
  RhobusButton,
  RhobusButtonImage,
  RhobusButtonsWrapper,
} from "@styles/main/artwork/button.style";

import type { FC } from "react";

interface ArtworkCharacterImageProps {
  color: string;
}

const ArtworkCharacterButtons: FC<ArtworkCharacterImageProps> = ({ color }) => {
  const { handleClickCharBtn } = useArtworkContext();

  return (
    <RhobusButtonsWrapper>
      {ARTWORK_BUTTON_IMAGES.map((image, index) => (
        <RhobusButton
          key={`${index + 1}번 캐릭터 버튼`}
          onClick={handleClickCharBtn(index)}
          $color={color}
        >
          <RhobusButtonImage src={image} alt={`${index + 1}번 캐릭터 이미지`} />
        </RhobusButton>
      ))}
    </RhobusButtonsWrapper>
  );
};

export default ArtworkCharacterButtons;
