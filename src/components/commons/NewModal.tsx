import { useState, useEffect, forwardRef, memo } from "react";
import { createPortal } from "react-dom";
import _ from "lodash";

import {
  ModalContainer,
  ModalBackground,
  ModalWrapper,
} from "@styles/commons/new-modal.style";

interface ContainerStyles {
  toggleTime?: number;
  verticalAlign?: string;
  horizontalAlign?: string;
}

interface BackgroundStyles {
  backgroundColor?: string;
  opacity?: number;
}

interface ArticleStyles {
  left?: number;
  right?: number;
  top?: number;
  bottom?: number;
  width?: number | string;
  height?: number | string;
  padding?: number;
}

type ModalStyles = ContainerStyles & BackgroundStyles & ArticleStyles;

interface ModalProps {
  displayModal: boolean;
  isModalOpen: boolean;
  children: React.ReactNode;
  styles?: ModalStyles;
  portalKey?: string | null;
}

const NewModal = forwardRef<HTMLDivElement, ModalProps>(
  ({ displayModal, children, styles, portalKey }, ref) => {
    const SCROLL_DEBOUNCE_TIME = 1000;

    const [top, setTop] = useState(0);

    const scrollEventListener = _.throttle(() => {
      setTop(window.scrollY);
    }, SCROLL_DEBOUNCE_TIME);

    useEffect(() => {
      window.addEventListener("scroll", scrollEventListener);

      return () => {
        window.removeEventListener("scroll", scrollEventListener);
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return displayModal ? (
      createPortal(
        <ModalContainer
          ref={ref}
          className="show"
          $top={top}
          $toggleTime={styles?.toggleTime}
          $horizontalAlign={styles?.horizontalAlign}
          $verticalAlign={styles?.verticalAlign}
        >
          <ModalBackground
            $backgroundColor={styles?.backgroundColor}
            $opacity={styles?.opacity}
          />
          <ModalWrapper
            $left={styles?.left}
            $right={styles?.right}
            $top={styles?.top}
            $bottom={styles?.bottom}
            $width={styles?.width}
            $height={styles?.height}
            $padding={styles?.padding}
          >
            {children}
          </ModalWrapper>
        </ModalContainer>,
        document.body,
        portalKey || "modal"
      )
    ) : (
      <></>
    );
  }
);

export default memo(NewModal);
