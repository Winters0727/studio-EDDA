type MainScreens = "mobile" | "tablet" | "pc";
type Screens = "mobileNarrow" | "mobile" | "mobileWide" | "tablet" | "pc";
type ScreenWidth = {
  [screen in Screens]: string;
};
type FontSize = "normal" | "medium" | "subTitle" | "title" | "header";
type Font = {
  [screen in MainScreens]: {
    [size in FontSize]: string;
  };
};
type BorderRadius = {
  [screen in MainScreens]: string;
};

interface Color {
  [color: string | symbol]: string; // Hexcode
}

// 스크린 최대 너비는 2440으로 변경될 수도 있음
export const SCREEN_MAX_WIDTH = "1920px";

export const SCREEN: ScreenWidth = {
  mobileNarrow: "250px",
  mobile: "360px",
  mobileWide: "580px",
  tablet: "768px",
  pc: "1200px",
};

export const COLOR: Color = {
  black: "#222222",
  white: "#FFFFFF",

  mainColor: "#715EEF",
  subColor1: "#CCC2FB",
  subColor2: "#BCCDF7",

  // Bootstrap 색상
  primary: "#3B71CA",
  secondary: "#9FA6B2",
  success: "#14A44D",
  danger: "#DC4C64",
  warning: "#E4A11B",
  info: "#54B4D3",
  light: "#FBFBFB",
  dark: "#332D2D",
};

export const FONT: Font = {
  pc: {
    header: "72px",
    title: "36px",
    subTitle: "26px",
    medium: "18px",
    normal: "16px",
  },
  tablet: {
    header: "54px",
    title: "28px",
    subTitle: "22px",
    medium: "18px",
    normal: "16px",
  },
  mobile: {
    header: "32px",
    title: "24px",
    subTitle: "18px",
    medium: "16px",
    normal: "14px",
  },
};

export const BORDER_RADIUS: BorderRadius = {
  pc: "30px",
  tablet: "26px",
  mobile: "16px",
};
