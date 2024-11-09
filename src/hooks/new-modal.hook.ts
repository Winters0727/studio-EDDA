import { useState, useEffect, useRef } from "react";
import dayjs from "dayjs";

import type { MutableRefObject } from "react";

export const useModal = (
  ref: MutableRefObject<HTMLDivElement | null>,
  throttleTime: number = 0
) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toggleDisabled, setToggleDisabled] = useState(false);

  const prevCallFuncTime = useRef(Date.now());

  const toggleModal = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const currentTime = Date.now();

    const timeDiff = dayjs(currentTime).diff(prevCallFuncTime.current);

    if (!toggleDisabled && throttleTime <= timeDiff && ref.current) {
      prevCallFuncTime.current = currentTime;

      const modalElement = ref.current;

      if (isModalOpen) {
        document.body.style.overflow = "auto";
        modalElement.classList.remove("show");
        modalElement.classList.add("hide");
      } else {
        document.body.style.overflow = "hidden";
        modalElement.classList.remove("hide");
        modalElement.classList.add("show");
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
  }, [ref]);

  return {
    isModalOpen,
    toggleModal,
  };
};
