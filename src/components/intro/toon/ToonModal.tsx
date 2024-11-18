import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import "swiper/css";

import NewModal from "@components/commons/NewModal";

import {
  ModalBox,
  ModalCloseButton,
  ModalItemWrapper,
  ModalWrapper,
  ToonWrapper,
  Pagination,
  ModalControl,
} from "@styles/commons/modal.style";

import type { FC, MutableRefObject } from "react";

interface ModalProps {
  itemId: number;
  pages: number;
  displayModal: boolean;
  isModalOpen: boolean;
  modalRef: MutableRefObject<HTMLDivElement | null>;
  toggleModal: (e: React.MouseEvent) => void;
}

const ToonModal: FC<ModalProps> = ({
  itemId,
  pages,
  displayModal,
  isModalOpen,
  modalRef,
  toggleModal,
}) => {
  const [currentPage, setCurrentPage] = useState(0);

  const swiperRef = useRef<SwiperType | null>(null);
  const toonWrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setCurrentPage(0);
  }, [isModalOpen]);

  useEffect(() => {
    if (swiperRef.current) {
      const activeSlide =
        swiperRef.current.slides[swiperRef.current.activeIndex];
      if (activeSlide && toonWrapperRef.current) {
        toonWrapperRef.current.scrollTop = 0;
        swiperRef.current.slideTo(currentPage);
      }
    }
  }, [currentPage]);

  return (
    <NewModal
      ref={modalRef}
      portalKey="toon-modal"
      displayModal={displayModal}
      isModalOpen={isModalOpen}
      styles={{
        opacity: 0.75,
        horizontalAlign: "center",
        verticalAlign: "center",
        backgroundColor: "rgb(14, 0, 78)",
      }}
    >
      <ModalWrapper className="open">
        <ModalBox className="toon">
          <ModalItemWrapper className="toon">
            <ModalCloseButton onClick={toggleModal} className="toon">
              X
            </ModalCloseButton>
            <ToonWrapper ref={toonWrapperRef}>
              {pages === 1 ? (
                <img src={`/images/dev_toon-0${itemId}.jpg`} alt="toon" />
              ) : (
                <Swiper
                  spaceBetween={50}
                  slidesPerView={1}
                  touchRatio={0}
                  onSwiper={(swiper: SwiperType) =>
                    (swiperRef.current = swiper)
                  }
                  onSlideChange={(swiper: SwiperType) => {
                    const activeSlide = swiper.slides[swiper.activeIndex];
                    const idx = swiper.activeIndex;
                    if (activeSlide) {
                      const img = activeSlide.querySelector("img");
                      if (img) {
                        const height = img.clientHeight;
                        swiper.el.style.height = `${height}px`;
                      }
                    }
                    setCurrentPage(idx);
                  }}
                >
                  {Array.from({ length: pages }, (_, index) => (
                    <SwiperSlide key={`toon-${itemId}-${index}`}>
                      <img
                        src={`/images/dev_toon-0${itemId}-${index
                          .toString()
                          .padStart(2, "0")}.jpg`}
                        alt="toon"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}
            </ToonWrapper>

            {pages > 1 && (
              <>
                <ModalControl>
                  <div
                    className="modalbutton prev"
                    onClick={() => swiperRef.current?.slidePrev()}
                  ></div>
                  <div
                    className="modalbutton next"
                    onClick={() => swiperRef.current?.slideNext()}
                  ></div>
                </ModalControl>
                <Pagination>
                  {Array.from({ length: pages }, (_, index) => (
                    <div
                      key={`toon-${itemId}-page-${index}`}
                      className={`page ${
                        index === currentPage ? "active" : ""
                      }`}
                      onClick={() => setCurrentPage(index)}
                    ></div>
                  ))}
                </Pagination>
              </>
            )}
          </ModalItemWrapper>
        </ModalBox>
      </ModalWrapper>
    </NewModal>
  );
};

export default ToonModal;
