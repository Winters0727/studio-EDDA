import { useEffect, useState } from "react";

import SectionTitle from "@components/commons/SectionTitle";
import Modal from "@components/commons/Modal";

import { useModal } from "@hooks/modal.hook";
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

const StudioToon: FC = () => {
  const IO_THRESHOLD = 0.3;

  const TOON_ITEMS = [
    {
      thumbnail: "/images/toon-thumb01.png",
      title: "DXI 개발하는 많화",
    },
    {
      thumbnail: "/images/toon-thumb02.png",
      title: "로키 디자인 회의",
    },
    {
      thumbnail: "/images/toon-thumb03.png",
      title: "스튜디오 함부기",
    },
    {
      thumbnail: "/images/toon-thumb04.png",
      title: "에다 처벌내규",
    },
  ];

  const [childrenCount, setChildrenCount] = useState(0);
  const [itemId, setItemId] = useState<number | null>(null);
  const { isModalOpen, toggleModal } = useModal({
    itemNumber: itemId || 0,
    setItemId,
  });
  const { targetRefs, entries } = useIntersectionObserver(IO_THRESHOLD);

  useEffect(() => {
    const toonItemWrapper = document.querySelector("#toon-item-wrapper");
    if (toonItemWrapper) {
      const count = toonItemWrapper.children.length;
      setChildrenCount(count);
    }
  }, []);

  const handleItemClick = (id: number) => {
    if (itemId === id) {
      setItemId(null);
      setTimeout(() => {
        setItemId(id);
      }, 0);
    } else {
      setItemId(id);
    }
  };

  useEffect(() => {
    if (itemId !== null) {
      toggleModal();
    }
  }, [itemId]);

  return (
    <StudioToonBox
      ref={(el) => (targetRefs.current[0] = el as HTMLDivElement)}
      id="toon"
    >
      <Modal
        type="toon"
        itemId={itemId || 0}
        modalOpen={isModalOpen}
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
              onClick={() => handleItemClick(index)}
            >
              <img
                src={toon.thumbnail}
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

export default StudioToon;
