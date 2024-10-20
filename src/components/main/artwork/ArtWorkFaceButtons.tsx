import {
  FaceButton,
  FaceButtonImage,
  FaceButtonsWrapper,
} from "@styles/main/artwork/button.style";

import type { FC } from "react";

interface ArtworkFaceButtonsProps {
  paths: string[];
  color: string;
}

const ArtworkFaceButtons: FC<ArtworkFaceButtonsProps> = ({ paths, color }) => {
  return (
    <FaceButtonsWrapper>
      {paths.map((path, index) => (
        <FaceButton key={`face-btn-${index}`} $color={color}>
          <FaceButtonImage src={path} alt={`${index + 1}번 표정 버튼`} />
        </FaceButton>
      ))}
    </FaceButtonsWrapper>
  );
};

export default ArtworkFaceButtons;
