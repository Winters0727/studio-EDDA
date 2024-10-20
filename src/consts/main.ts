import ZeusStandingImage from "@assets/images/main/artwork/artwork-zeus.png";

import ZeusButton from "@assets/images/main/artwork/zeus-button.png";
import OdinButton from "@assets/images/main/artwork/odin-button.png";
import RokiButton from "@assets/images/main/artwork/roki-button.png";
import PoseidonButton from "@assets/images/main/artwork/poseidon-button.png";

import ZeusFace1 from "@assets/images/main/artwork/zeus-face-1.png";
import ZeusFace2 from "@assets/images/main/artwork/zeus-face-2.png";
import ZeusFace3 from "@assets/images/main/artwork/zeus-face-3.png";

import type { ArtworkCharacter } from "@customTypes/main/artwork.type";

export const ARTWORK_CHARACTERS: ArtworkCharacter[] = [
  {
    name: "제우스",
    ruby: "Ζεύς",
    color: {
      name: "#7a69bc",
      nameBackground: "#9489be80",
      main: "#7a69bc",
      ruby: "#7a69bc",
      speechBubbleShadow: "#7a69bc59",
      background: "#9489be",
    },
    quotation:
      "만물의 아버지…. 가 아니라<br />어머니인 <strong>제우스</strong>이니라!",
    imagePaths: {
      standing: ZeusStandingImage,
      button: ZeusButton,
      faces: [ZeusFace1, ZeusFace2, ZeusFace3],
    },
  },
  {
    name: "오딘",
    ruby: "ᚢᚦᛁᚾ",
    color: {
      name: "#009AFF",
      nameBackground: "#72C7FF80",
      main: "#009AFF",
      ruby: "#009AFF",
      speechBubbleShadow: "#009aff59",
      background: "#72C7FF",
    },
    quotation:
      "데자와를 좋아한다고?<br />당신은 틀림없는 <strong>데자와</strong>애호가데스와!",
    imagePaths: {
      standing: ZeusStandingImage,
      button: OdinButton,
      faces: [ZeusFace1, ZeusFace2, ZeusFace3],
    },
  },
  {
    name: "로키",
    ruby: "ᛚᚢᚴᛁ",
    color: {
      name: "#9489be",
      nameBackground: "#FFC77280",
      main: "#9489be",
      ruby: "#9489be",
      speechBubbleShadow: "#9489be59",
      background: "#FFC772",
    },
    quotation:
      "이 팀은 무급노동력이 필요해요<br /><strong>제우스</strong>는 무급노예가 필요해요!",
    imagePaths: {
      standing: ZeusStandingImage,
      button: RokiButton,
      faces: [ZeusFace1, ZeusFace2, ZeusFace3],
    },
  },
  {
    name: "발두르",
    ruby: " ᛒᛅᛚᛏᚱ",
    color: {
      name: "#9489be",
      nameBackground: "#FFC77280",
      main: "#9489be",
      ruby: "#9489be",
      speechBubbleShadow: "#9489be59",
      background: "#FFC772",
    },
    quotation: "이터널 리턴인데<br />왜 <strong>블붕이</strong>냐고!",
    imagePaths: {
      standing: ZeusStandingImage,
      button: PoseidonButton,
      faces: [ZeusFace1, ZeusFace2, ZeusFace3],
    },
  },
];

export const ARTWORK_BUTTON_IMAGES = ARTWORK_CHARACTERS.map(
  (char) => char.imagePaths.button
);
