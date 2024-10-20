import React, { useEffect, useRef, useState, useCallback } from "react";
import SectionTitle from "@components/commons/SectionTitle";
import {
    StudioInfoBox,
    StudioInfoWrapper,
    SubTitle,
    IntroBoxWrapper,
    IntroHarfBoxLeft,
    IntroHarfBoxRight,
    StudioLogo,
    IntroFullBox,
    FullBoxLogo,
    StudioVisualBehind,
    StudioVisualFoward,
    StarsLeft,
    StarsRight,
} from "@styles/intro/index.style";

// Throttling 함수
function throttle(fn: Function, wait: number) {
    let inThrottle: boolean;
    return function (this: any, ...args: any[]) {
        if (!inThrottle) {
            fn.apply(this, args);
            inThrottle = true;
            setTimeout(() => (inThrottle = false), wait);
        }
    };
}

function StudioInfo({ scrollY }: { scrollY: number }) {
    const StudioTitleRef = useRef<HTMLDivElement>(null);
    const StudioBoxLeftRef = useRef<HTMLDivElement>(null);
    const StudioBoxRightRef = useRef<HTMLDivElement>(null);
    const StudioBoxFullRef = useRef<HTMLDivElement>(null);

    const [isTitleScrolled, setIsTitleScrolled] = useState(false);
    const [isBoxLeftScrolled, setIsBoxLeftScrolled] = useState(false);
    const [isBoxRightScrolled, setIsBoxRightScrolled] = useState(false);
    const [isBoxFullScrolled, setIsBoxFullScrolled] = useState(false);

    const handleScroll = useCallback(() => {
        const updateScrollState = (ref: React.RefObject<HTMLDivElement>, setState: React.Dispatch<React.SetStateAction<boolean>>, currentState: boolean) => {
            if (ref.current) {
                const yPos = ref.current.getBoundingClientRect().top + window.scrollY;
                const triggerPosition = window.scrollY; 
                
                if (!currentState && window.scrollY >= yPos - triggerPosition) {
                    setState(true);
                }
            }
        };

        updateScrollState(StudioTitleRef, setIsTitleScrolled, isTitleScrolled);
        updateScrollState(StudioBoxLeftRef, setIsBoxLeftScrolled, isBoxLeftScrolled);
        updateScrollState(StudioBoxRightRef, setIsBoxRightScrolled, isBoxRightScrolled);
        updateScrollState(StudioBoxFullRef, setIsBoxFullScrolled, isBoxFullScrolled);
    }, [isTitleScrolled, isBoxLeftScrolled, isBoxRightScrolled, isBoxFullScrolled]);

    useEffect(() => {
        const throttledScroll = throttle(handleScroll, 100);
        window.addEventListener("scroll", throttledScroll);
        handleScroll(); // 컴포넌트 마운트 후 초기 상태 설정

        return () => {
            window.removeEventListener("scroll", throttledScroll);
        };
    }, [handleScroll]);

    return (
        <StudioInfoBox>
            <StudioInfoWrapper ref={StudioTitleRef} className={isTitleScrolled ? "scrolled" : ""}>
                <SectionTitle
                    text={{
                        title: "Studio EDDA",
                        subTitle: "About",
                    }}
                    direction="left"
                />

                <SubTitle>자신의 경험과 이상을 꿈꾸어라</SubTitle>

                <IntroBoxWrapper>
                    <IntroHarfBoxLeft ref={StudioBoxLeftRef} className={isBoxLeftScrolled ? "scrolled" : ""}>
                        <StudioLogo>
                            <img src="/images/studio-logo-2.png" alt="Studio EDDA" />
                        </StudioLogo>
                        <p>
                            에다라는 이름은 북유럽 신화의 서사집 <strong>에다(Edda)</strong>와
                            <br />
                            일본어로 가지를 뜻하는 <strong>에다(えだ)</strong>에서 따왔습니다.
                        </p>
                    </IntroHarfBoxLeft>
                    <IntroHarfBoxRight ref={StudioBoxRightRef} className={isBoxRightScrolled ? "scrolled" : ""}>
                        <StudioLogo>
                            <img src="/images/studio-logo-1.png" alt="Studio EDDA" />
                        </StudioLogo>
                        <p>
                            스튜디오 에다의 로고는{" "}
                            <strong>
                                가지처럼 나뉘어가는
                                <br />
                                수많은 이야기
                            </strong>
                            의 모습을 상징합니다.
                        </p>
                    </IntroHarfBoxRight>
                </IntroBoxWrapper>

                <IntroFullBox ref={StudioBoxFullRef} className={isBoxFullScrolled ? "scrolled" : ""}>
                    <FullBoxLogo>
                        <StarsLeft />
                        <img src="/images/studio-logo-full.png" alt="Studio EDDA" />
                        <StarsRight />
                    </FullBoxLogo>
                    <p>
                        <b>상상 그 자체</b>를 현실로 만들어내는 <br />
                        <strong>스튜디오 에다</strong>가 되겠습니다.
                    </p>
                </IntroFullBox>
            </StudioInfoWrapper>
            <StudioVisualBehind className={isBoxFullScrolled ? "scrolled" : ""}></StudioVisualBehind>
            <StudioVisualFoward className={isBoxFullScrolled ? "scrolled" : ""}></StudioVisualFoward>
        </StudioInfoBox>
    );
}

export default StudioInfo;
