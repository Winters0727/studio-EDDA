import {
  createContext,
  useCallback,
  useState,
  useRef,
  useContext,
  useEffect,
} from "react";

import { ARTWORK_CHARACTERS } from "@consts/main";

import type { MutableRefObject } from "react";
import type { ArtworkCharacter } from "@customTypes/main/artwork.type";

interface ArtworkContextProps {
  curChar: ArtworkCharacter;
  charImageWrapperRef: MutableRefObject<HTMLDivElement | null> | null;
  charLength: number;
  clickCharBtn: (index: number) => void;
}

const ArtworkContext = createContext<ArtworkContextProps>({
  curChar: ARTWORK_CHARACTERS[0],
  charImageWrapperRef: null,
  charLength: ARTWORK_CHARACTERS.length,
  clickCharBtn: (index: number) => {},
});

export const ArtworkProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [charIndex, setCharIndex] = useState(0);

  const imageWrapperRef = useRef<HTMLDivElement | null>(null);

  const clickCharBtn = useCallback(
    (index: number) => {
      if (index !== charIndex) {
        if (imageWrapperRef.current) {
          const imageWrapperElement = imageWrapperRef.current;

          imageWrapperElement.style.opacity = "0";

          setTimeout(() => {
            setCharIndex(index);
            imageWrapperElement.style.opacity = "1";
          }, 500);
        }
      }
    },
    [charIndex]
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

    if (imageWrapperRef.current) {
      const imageWrapperElement = imageWrapperRef.current;

      const changeImageOpacity = () =>
        (imageWrapperElement.style.opacity = "1");

      imageWrapperElement.addEventListener("animationend", changeImageOpacity);

      return () => {
        window.removeEventListener("load", preloadImages);
        imageWrapperElement.removeEventListener(
          "animationend",
          changeImageOpacity
        );
      };
    }

    return () => window.removeEventListener("load", preloadImages);
  }, []);

  return (
    <ArtworkContext.Provider
      value={{
        curChar: ARTWORK_CHARACTERS[charIndex],
        charImageWrapperRef: imageWrapperRef,
        charLength: ARTWORK_CHARACTERS.length,
        clickCharBtn,
      }}
    >
      {children}
    </ArtworkContext.Provider>
  );
};

export const useArtworkContext = () => useContext(ArtworkContext);
