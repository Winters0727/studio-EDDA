export interface ArtworkCharacter {
  name: string;
  ruby: string;
  color: {
    name: string;
    nameBackground: string;
    main: string;
    ruby: string;
    speechBubbleShadow: string;
    background: string;
    border: string;
  };
  quotation: string;
  image: {
    translateX: {
      default: number;
      tablet: number;
      mobileWide: number;
      mobile: number;
      mobileNarrow: number;
    };
  };
  font?: {
    lineHeight?: {
      default?: number;
      tablet?: number;
      mobileWide?: number;
      mobile?: number;
      mobileNarrow?: number;
    };
  };
  imagePaths: {
    standing: string;
    button: string;
    faces: string[];
  };
}
