import { createContext, useCallback, useState, useContext } from "react";

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
