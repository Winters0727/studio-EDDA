import React, { useState, useEffect, useRef } from "react";
import { ModalWrapper, ModalBox, ModalCloseButton, ModalItemWrapper, ModalVideoWrapper, ToonWrapper, Pagination, ModalControl } from "@styles/commons/modal.style";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import "swiper/css";

import type { FC } from "react";

interface ModalProps {
    type: string;
    itemId: number;
    modalOpen: boolean;
    toggleModal: (e: React.MouseEvent) => void;
}

const Modal: FC<ModalProps> = ({ type, itemId, modalOpen, toggleModal }) => {
    const [pages, setPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const swiperRef = useRef<SwiperType | null>(null); // Swiper 인스턴스 타입 지정
    const toonWrapperRef = useRef<HTMLDivElement | null>(null);

    // 모달이 열리면 body 스크롤 방지
    useEffect(() => {
        if (modalOpen) {
            document.body.classList.add("modal-open");
        } else {
            document.body.classList.remove("modal-open");
        }
        return () => {
            document.body.classList.remove("modal-open");
        };

    }, [modalOpen]);

    // itemId가 변경될 때 페이지 수 변경
    useEffect(() => {
        if (itemId === 1) {
            setPages(3);
        } else {
            setPages(0);
        }
    }, [itemId]);

    // currentPage가 변경될 때 Swiper를 해당 페이지로 이동
    useEffect(() => {
        if (swiperRef.current) {
            const activeSlide = swiperRef.current.slides[swiperRef.current.activeIndex];
            if (activeSlide && toonWrapperRef.current) {
                toonWrapperRef.current.scrollTop = 0;
            }
        }
    }, [currentPage]);

    // 모달이 닫힐 때 currentPage 초기화
    if (!modalOpen) return null;

    return (
        <ModalWrapper className={modalOpen ? "open" : ""}>
            <ModalBox className={type === "toon" ? "toon" : "video"}>
                {type === "toon" ? (
                    <ModalItemWrapper className={type === "toon" ? "toon" : "video"}>
                        <ModalCloseButton onClick={toggleModal} className={type === "toon" ? "toon" : "video"}>
                            X
                        </ModalCloseButton>
                        <ToonWrapper ref={toonWrapperRef}>
                            {pages === 0 ? (
                                <img src={`/images/dev_toon-0${itemId}.jpg`} alt="toon" />
                            ) : (
                                <Swiper
                                    spaceBetween={50}
                                    slidesPerView={1}
                                    touchRatio={0}
                                    onSwiper={(swiper: SwiperType) => (swiperRef.current = swiper)}
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
                                        <SwiperSlide key={index}>
                                            <img src={`/images/dev_toon-0${itemId}-0${index}.jpg`} alt="toon" />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            )}
                        </ToonWrapper>

                        {pages > 0 ? (
                            <ModalControl>
                                <div className="modalbutton prev" onClick={() => swiperRef.current?.slidePrev()}></div>
                                <div className="modalbutton next" onClick={() => swiperRef.current?.slideNext()}></div>
                            </ModalControl>
                        ) : null}

                        <Pagination>
                            {Array.from({ length: pages }, (_, index) => (
                                <div key={index} className={`page ${index === currentPage ? "active" : ""}`} onClick={() => setCurrentPage(index)}></div>
                            ))}
                        </Pagination>
                    </ModalItemWrapper>
                ) : (
                    <ModalItemWrapper className={type === "toon" ? "toon" : "video"}>
                        <ModalCloseButton onClick={toggleModal} className={type === "toon" ? "toon" : "video"}>
                            X
                        </ModalCloseButton>
                        <ModalVideoWrapper>
                            <iframe
                                title={`video-${itemId}`}
                                src={`https://www.youtube.com/embed/${itemId}`}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </ModalVideoWrapper>
                    </ModalItemWrapper>
                )}
            </ModalBox>
        </ModalWrapper>
    );
};

export default Modal;
