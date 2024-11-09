import { useState, useEffect, useRef } from "react";
import dayjs from "dayjs";

import type { MutableRefObject } from "react";

export const useModal = (
  ref: MutableRefObject<HTMLDivElement | null>,
  throttleTime: number = 0
) => {
  const [displayModal, setDisplayModal] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toggleDisabled, setToggleDisabled] = useState(false);

  const prevCallFuncTime = useRef(Date.now());

  const toggleModal = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const currentTime = Date.now();

    const timeDiff = dayjs(currentTime).diff(prevCallFuncTime.current);

    if (!toggleDisabled && throttleTime <= timeDiff) {
      prevCallFuncTime.current = currentTime;

      if (ref.current) {
        const element = ref.current;
        element.classList.remove("show");
        element.classList.add("hide");
      } else {
        setDisplayModal(true);
        document.body.style.overflow = "hidden";
      }

      setIsModalOpen((prev) => !prev);
    }
  };

  useEffect(() => {
    if (ref.current) {
      const element = ref.current;

      const onAnimationStart = () => {
        setToggleDisabled(true);
      };

      const onAnimationCancelAndEnd = () => {
        if (element.classList.contains("hide")) {
          element.classList.remove("hide");
          document.body.style.overflow = "auto";
          setDisplayModal(false);
        }

        setToggleDisabled(false);
      };

      element.addEventListener("animationstart", onAnimationStart);
      element.addEventListener("animationcancel", onAnimationCancelAndEnd);
      element.addEventListener("animationend", onAnimationCancelAndEnd);

      return () => {
        element.removeEventListener("animationstart", onAnimationStart);
        element.addEventListener("animationcancel", onAnimationCancelAndEnd);
        element.removeEventListener("animationend", onAnimationCancelAndEnd);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref.current]);

  return {
    displayModal,
    isModalOpen,
    toggleModal,
  };
};
