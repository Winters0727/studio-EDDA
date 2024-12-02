import { useEffect, useState, useRef } from "react";

import SectionTitle from "@components/commons/SectionTitle";
import ToonModal from "./toon/ToonModal";

import { useModal } from "@hooks/new-modal.hook";
import useIntersectionObserver from "@hooks/scroll.hook";

import {
  StudioToonBox,
  StudioToonWrapper,
  SubTitle,
  ToonDetail,
  ToonItemWrapper,
  ToonItem,
  ToonInfo,
  ToonVisual,
} from "@styles/intro/index.style";

import type { FC } from "react";

interface ToonItemData {
  title: string;
  pageCount: number;
}

const NewStudioToon: FC = () => {
  const IO_THRESHOLD = 0.2;
  const TOON_ITEMS: ToonItemData[] = [
    {
      title: "DXI 개발하는 많화",
      pageCount: 1,
    },
    {
      title: "로키 디자인 회의",
      pageCount: 3,
    },
    {
      title: "스튜디오 함부기",
      pageCount: 1,
    },
    {
      title: "에다 처벌내규",
      pageCount: 1,
    },
    {
      title: "아폴론의 평상복",
      pageCount: 1,
    },
    {
      title: "우주의 균형",
      pageCount: 1,
    },
  ];

  const [childrenCount, setChildrenCount] = useState(0);
  const [itemId, setItemId] = useState(0);

  const modalRef = useRef<HTMLDivElement | null>(null);

  const { displayModal, isModalOpen, toggleModal } = useModal(modalRef, 1500);

  const { targetRefs, entries } = useIntersectionObserver(IO_THRESHOLD);

  const handleClickItem = (itemId: number) => (e: React.MouseEvent) => {
    setItemId(itemId);
    toggleModal(e);
  };

  useEffect(() => {
    const toonItemWrapper = document.querySelector("#toon-item-wrapper");
    if (toonItemWrapper) {
      const count = toonItemWrapper.children.length;
      setChildrenCount(count);
    }
  }, []);

  return (
    <StudioToonBox
      ref={(el) => (targetRefs.current[0] = el as HTMLDivElement)}
      id="toon"
    >
      <ToonModal
        itemId={itemId}
        pages={TOON_ITEMS[itemId].pageCount}
        modalRef={modalRef}
        displayModal={displayModal}
        isModalOpen={isModalOpen}
        toggleModal={toggleModal}
      />

      <StudioToonWrapper className={entries["toon"] ? "scrolled" : ""}>
        <SectionTitle
          text={{ title: "Studio EDDA", subTitle: "About" }}
          direction="left"
        />

        <SubTitle className={entries["toon"] ? "scrolled" : ""}>
          스튜디오 에다의 개발 트리비아
        </SubTitle>

        <ToonDetail className={entries["toon"] ? "scrolled" : ""}>
          모두가 기다리는 동안 스튜디오 에다에서는 <br />
          어떤 일이 일어나고 있을까요? <br />
          스튜디오 에다의 좌충우돌 개발일지, <br />
          4컷 만화에 담았습니다!
        </ToonDetail>

        <ToonItemWrapper
          id="toon-item-wrapper"
          className={entries["toon"] ? "scrolled" : ""}
          $childrenCount={childrenCount}
        >
          {TOON_ITEMS.map((toon, index) => (
            <ToonItem
              key={`EDDA Toon - ${index}`}
              onClick={handleClickItem(index)}
            >
              <img
                src={`/images/toon-thumb${(index + 1)
                  .toString()
                  .padStart(2, "0")}.png`}
                alt={`EDDA Toon - ${index} thumbnail`}
              />
              <ToonInfo>
                <p>
                  <strong>{index + 1}화</strong>
                  <span>{toon.title}</span>
                </p>
              </ToonInfo>
            </ToonItem>
          ))}
        </ToonItemWrapper>
      </StudioToonWrapper>
      <ToonVisual />
    </StudioToonBox>
  );
};

export default NewStudioToon;
