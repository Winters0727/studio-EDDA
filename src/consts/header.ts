interface HeaderLinks {
  text: {
    kor: string;
    eng: string;
  };
  to: string;
}

export const HEADER_LINKS: HeaderLinks[] = [
  {
    text: {
      kor: "메인",
      eng: "main",
    },
    to: "/",
  },
  {
    text: {
      kor: "스튜디오 소개",
      eng: "studio edda",
    },
    to: "/intro",
  },
];
