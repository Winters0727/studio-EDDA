import {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from "react";

import { ARTWORK_CHARACTERS } from "@consts/main";

import type { ArtworkCharacter } from "@customTypes/main/artwork.type";

interface ArtworkContextProps {
  curChar: ArtworkCharacter;
  charLength: number;
  handleClickCharBtn: (index: number) => (e: React.MouseEvent) => void;
}

const ArtworkContext = createContext<ArtworkContextProps>({
  curChar: ARTWORK_CHARACTERS[0],
  charLength: ARTWORK_CHARACTERS.length,
  handleClickCharBtn: (index: number) => (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
  },
});

export const ArtworkProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [charIndex, setCharIndex] = useState(0);

  const handleClickCharBtn = useCallback(
    (index: number) => (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();

      setCharIndex(index);
    },
    []
  );

  useEffect(() => {
    const imagePaths = ARTWORK_CHARACTERS.map((char) =>
      [
        char.imagePaths.standing,
        char.imagePaths.button,
        char.imagePaths.faces,
      ].flat(1)
    ).flat(1);

    const preloadImageAsyncs = imagePaths.map(
      (imagePath) =>
        new Promise((resolve, reject) => {
          try {
            const image = new Image();
            image.src = imagePath;
            resolve(true);
          } catch (err: any) {
            reject(err.message);
          }
        })
    );

    const preloadImages = () => Promise.all(preloadImageAsyncs);

    window.addEventListener("load", preloadImages);

    return () => window.removeEventListener("load", preloadImages);
  }, []);

  return (
    <ArtworkContext.Provider
      value={{
        curChar: ARTWORK_CHARACTERS[charIndex],
        charLength: ARTWORK_CHARACTERS.length,
        handleClickCharBtn,
      }}
    >
      {children}
    </ArtworkContext.Provider>
  );
};

export const useArtworkContext = () => useContext(ArtworkContext);
