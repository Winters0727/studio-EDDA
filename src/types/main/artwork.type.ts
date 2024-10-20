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
  };
  quotation: string;
  imagePaths: {
    standing: string;
    button: string;
    faces: string[];
  };
}
