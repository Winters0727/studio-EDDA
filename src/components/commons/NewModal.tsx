import { useState, useEffect, forwardRef } from "react";
import { createPortal } from "react-dom";
import _ from "lodash";

import {
  ModalContainer,
  ModalBackground,
  ModalWrapper,
} from "@styles/commons/new-modal.style";

interface ModalStyles {
  backgroundColor?: string;
  opacity?: number;
  left?: number;
  right?: number;
  top?: number;
  bottom?: number;
  width?: number;
  height?: number;
  padding?: number;
  verticalAlign?: string;
  horizontalAlign?: string;
}

interface ModalProps {
  isModalOpen: boolean;
  children: React.ReactNode;
  styles?: ModalStyles;
  key?: string | null;
}

const NewModal = forwardRef<HTMLDivElement, ModalProps>(
  ({ children, styles, key }, ref) => {
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

    return createPortal(
      <ModalContainer
        ref={ref}
        $top={top}
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
      key || "modal"
    );
  }
);

export default NewModal;
