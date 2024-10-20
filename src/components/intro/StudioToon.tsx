import React, { useEffect, useState } from "react";
import { useModal } from "@hooks/modal.hook";
import SectionTitle from "@components/commons/SectionTitle";
import { StudioToonBox, StudioToonWrapper, SubTitle, ToonDetail, ToonItemWrapper, ToonItem, ToonInfo, ToonVisual } from "@styles/intro/index.style";
import Modal from "@components/commons/Modal";

import type { FC } from "react";

const StudioToon: FC<{ scrollY: number }> = ({ scrollY }) => {
    const [childrenCount, setChildrenCount] = useState(0);
    const [itemId, setItemId] = useState<number | null>(null);
    const { isModalOpen, toggleModal } = useModal({ itemNumber: itemId || 0, setItemId });

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
        <StudioToonBox>
            <Modal type="toon" itemId={itemId || 0} modalOpen={isModalOpen} toggleModal={toggleModal} />

            <StudioToonWrapper>
                <SectionTitle text={{ title: "Studio EDDA", subTitle: "About", }} direction="left" />

                <SubTitle>
                    스튜디오 에다의 개발 트리비아
                </SubTitle>

                <ToonDetail>
                    모두가 기다리는 동안 스튜디오 에다에서는 <br />
                    어떤 일이 일어나고 있을까요? <br />
                    스튜디오 에다의 좌충우돌 개발일지, <br />
                    4컷 만화에 담았습니다!
                </ToonDetail>

                <ToonItemWrapper childrenCount={childrenCount} id="toon-item-wrapper">
                    <ToonItem onClick={() => handleItemClick(0)}>
                        <img src="/images/toon-thumb01.png" alt="Studio EDDA" />
                        <ToonInfo>
                            <p>
                                <strong>1화</strong>
                                <span>DXI 개발하는 많화</span>
                            </p>
                        </ToonInfo>
                    </ToonItem>
                    <ToonItem onClick={() => handleItemClick(1)}>
                        <img src="/images/toon-thumb02.png" alt="Studio EDDA" />
                        <ToonInfo>
                            <p>
                                <strong>2화</strong>
                                <span>DXI 개발하는 많화</span>
                            </p>
                        </ToonInfo>
                    </ToonItem>
                </ToonItemWrapper>
            </StudioToonWrapper>

            <ToonVisual/>

        </StudioToonBox>
    );
};

export default StudioToon;