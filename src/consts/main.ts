import ZeusStandingImage from "@assets/images/main/artwork/artwork-zeus.png";
import OdinStandingImage from "@assets/images/main/artwork/artwork-odin.png";
import LokiStandingImage from "@assets/images/main/artwork/artwork-loki.png";
import PoseidonStandingImage from "@assets/images/main/artwork/artwork-poseidon.png";

import ZeusButton from "@assets/images/main/artwork/zeus-button.png";
import OdinButton from "@assets/images/main/artwork/odin-button.png";
import RokiButton from "@assets/images/main/artwork/roki-button.png";
import PoseidonButton from "@assets/images/main/artwork/poseidon-button.png";

import ZeusFace1 from "@assets/images/main/artwork/zeus-1.jpg";
import ZeusFace2 from "@assets/images/main/artwork/zeus-2.jpg";
import ZeusFace3 from "@assets/images/main/artwork/zeus-3.jpg";

import poseidonFace1 from "@assets/images/main/artwork/poseidon-1.jpg";
import poseidonFace2 from "@assets/images/main/artwork/poseidon-2.jpg";
import poseidonFace3 from "@assets/images/main/artwork/poseidon-3.jpg";

import odinFace1 from "@assets/images/main/artwork/odin-1.jpg";
import odinFace2 from "@assets/images/main/artwork/odin-2.jpg";
import odinFace3 from "@assets/images/main/artwork/odin-3.jpg";

import lokiFace1 from "@assets/images/main/artwork/loki-1.jpg";
import lokiFace2 from "@assets/images/main/artwork/loki-2.jpg";
import lokiFace3 from "@assets/images/main/artwork/loki-3.jpg";

import type { ArtworkCharacter } from "@customTypes/main/artwork.type";

export const ARTWORK_CHARACTERS: ArtworkCharacter[] = [
  {
    name: "제우스",
    ruby: "Ζεύς",
    color: {
      name: "#ffb200",
      nameBackground: "#ffefcb",
      main: "#ffb200",
      ruby: "#ffb200",
      speechBubbleShadow: "#FEDE94",
      background: "#FEDE94",
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
      name: "#736894",
      nameBackground: "#ab9cd6",
      main: "#554096",
      ruby: "#554096",
      speechBubbleShadow: "#7d719f",
      background: "#736894",
    },
    quotation:
      "데자와를 좋아한다고?<br />당신은 틀림없는 <strong>데자와</strong>애호가데스와!",
    imagePaths: {
      standing: OdinStandingImage,
      button: OdinButton,
      faces: [odinFace1, odinFace2, odinFace3],
    },
  },
  {
    name: "로키",
    ruby: "ᛚᚢᚴᛁ",
    color: {
      name: "#9b3040",
      nameBackground: "#d896a0",
      main: "#9b3040",
      ruby: "#9b3040",
      speechBubbleShadow: "#AF5E6A",
      background: "#AF5E6A",
    },
    quotation:
      "이 팀은 무급노동력이 필요해요<br /><strong>제우스</strong>는 무급노예가 필요해요!",
    imagePaths: {
      standing: LokiStandingImage,
      button: RokiButton,
      faces: [lokiFace1, lokiFace2, lokiFace3],
    },
  },
  {
    name: "포세이돈",
    ruby: "Ποσειδῶν",
    color: {
      name: "#0c7dde",
      nameBackground: "#82bdef",
      main: "#0c7dde",
      ruby: "#689AC5",
      speechBubbleShadow: "#689AC5",
      background: "#689AC5",
    },
    quotation: "이터널 리턴인데<br />왜 <strong>블붕이</strong>냐고!",
    imagePaths: {
      standing: PoseidonStandingImage,
      button: PoseidonButton,
      faces: [poseidonFace1, poseidonFace2, poseidonFace3],
    },
  },
];

export const ARTWORK_BUTTON_IMAGES = ARTWORK_CHARACTERS.map(
  (char) => char.imagePaths.button
);
