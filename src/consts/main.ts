import ZeusImage from "@assets/images/main/artwork/artwork-zeus.png";
import ZeusButton from "@assets/images/main/artwork/zeus-button.png";
import ZeusFace1 from "@assets/images/main/artwork/zeus-face1.jpg";
import ZeusFace2 from "@assets/images/main/artwork/zeus-face2.jpg";
import ZeusFace3 from "@assets/images/main/artwork/zeus-face3.jpg";

import OdinImage from "@assets/images/main/artwork/artwork-odin.png";
import OdinButton from "@assets/images/main/artwork/odin-button.png";
import OdinFace1 from "@assets/images/main/artwork/odin-face1.jpg";
import OdinFace2 from "@assets/images/main/artwork/odin-face2.jpg";
import OdinFace3 from "@assets/images/main/artwork/odin-face3.jpg";

import LokiImage from "@assets/images/main/artwork/artwork-loki.png";
import LokiButton from "@assets/images/main/artwork/loki-button.png";
import LokiFace1 from "@assets/images/main/artwork/loki-face1.jpg";
import LokiFace2 from "@assets/images/main/artwork/loki-face2.jpg";
import LokiFace3 from "@assets/images/main/artwork/loki-face3.jpg";

import PoseidonImage from "@assets/images/main/artwork/artwork-poseidon.png";
import PoseidonButton from "@assets/images/main/artwork/poseidon-button.png";
import PoseidonFace1 from "@assets/images/main/artwork/poseidon-face1.jpg";
import PoseidonFace2 from "@assets/images/main/artwork/poseidon-face2.jpg";
import PoseidonFace3 from "@assets/images/main/artwork/poseidon-face3.jpg";

import type { ArtworkCharacter } from "@customTypes/main/artwork.type";

export const ARTWORK_CHARACTERS: ArtworkCharacter[] = [
  {
    name: "제우스",
    ruby: "Ζεύς",
    color: {
      name: "#FEDE94",
      nameBackground: "#FEDE9480",
      main: "#FEDE94",
      ruby: "#FEDE94",
      speechBubbleShadow: "#FEDE9460",
      background: "#FEDE94",
      border: "#FEDE94",
    },
    quotation:
      "올림포스 12신,<br/>그중에서도 가장 훌륭하고 가장 정의로운 최고신!<br/>만물의 아버지, 아니 어머니 <strong>제우스</strong>이니라!",
    image: {
      translateX: {
        default: -160,
        tablet: -180,
        mobileWide: -90,
        mobile: -100,
        mobileNarrow: -140,
      },
    },
    imagePaths: {
      standing: ZeusImage,
      button: ZeusButton,
      faces: [ZeusFace1, ZeusFace2, ZeusFace3],
    },
  },
  {
    name: "오딘",
    ruby: "ᚢᚦᛁᚾ",
    color: {
      name: "#736894",
      nameBackground: "#73689480",
      main: "#736894",
      ruby: "#736894",
      speechBubbleShadow: "#73689460",
      background: "#736894",
      border: "#736894",
    },
    quotation:
      "...북유럽의 전 최고신 <strong>오딘</strong>.<br/>매니저 그대에게 광기를 베풀어주마.",
    image: {
      translateX: {
        default: -220,
        tablet: -220,
        mobileWide: -100,
        mobile: -130,
        mobileNarrow: -170,
      },
    },
    imagePaths: {
      standing: OdinImage,
      button: OdinButton,
      faces: [OdinFace1, OdinFace2, OdinFace3],
    },
  },
  {
    name: "로키",
    ruby: "ᛚᚢᚴᛁ",
    color: {
      name: "#AF5E6A",
      nameBackground: "#AF5E6A80",
      main: "#AF5E6A",
      ruby: "#AF5E6A",
      speechBubbleShadow: "#AF5E6A60",
      background: "#AF5E6A",
      border: "#AF5E6A",
    },
    quotation:
      "사기, 기망, 장난, 거짓말<br/>사람의 마음을 가지고 노는 건 언제나 즐거웠지.<br/>후후, <strong>로키</strong>라고 해.<br/>매니저, 넌 어떤 식으로 날 즐겁게 해주려나?",
    image: {
      translateX: {
        default: -160,
        tablet: -160,
        mobileWide: -100,
        mobile: -100,
        mobileNarrow: -160,
      },
    },
    imagePaths: {
      standing: LokiImage,
      button: LokiButton,
      faces: [LokiFace1, LokiFace2, LokiFace3],
    },
  },
  {
    name: "포세이돈",
    ruby: "Ποσειδών",
    color: {
      name: "#689AC5",
      nameBackground: "#689AC580",
      main: "#689AC5",
      ruby: "#689AC5",
      speechBubbleShadow: "#689AC560",
      background: "#689AC5",
      border: "#689AC5",
    },
    quotation:
      "인간, 나를 찬양할 것을 허락하마.<br/>영원한 잿빛 바다를 지배하는<br/>그리스 3주신의 일각, <strong>포세이돈</strong>이니라.",
    image: {
      translateX: {
        default: -150,
        tablet: -180,
        mobileWide: -100,
        mobile: -100,
        mobileNarrow: -160,
      },
    },
    imagePaths: {
      standing: PoseidonImage,
      button: PoseidonButton,
      faces: [PoseidonFace1, PoseidonFace2, PoseidonFace3],
    },
  },
];

export const ARTWORK_BUTTON_IMAGES = ARTWORK_CHARACTERS.map(
  (char) => char.imagePaths.button
);
