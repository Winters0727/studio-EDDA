import React, { useRef, useState, useEffect } from "react";
import SectionTitle from "@components/commons/SectionTitle";
import { IntroMain, IntroMainImage, IntroMainVisual, IntroMainWrapper, IntroMainText, IntroSubText, IntroDetail } from "@styles/intro/index.style";

const MainVisual = ({ scrollY }: { scrollY: number }) => {
    const introMainRef = useRef<HTMLDivElement>(null);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (introMainRef.current) {
                const introMainY = introMainRef.current.getBoundingClientRect().top + window.scrollY;
                if (window.scrollY >= introMainY) {
                    setIsScrolled(true);
                } else {
                    setIsScrolled(false);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        // 컴포넌트가 마운트된 후 한 번 호출하여 초기 상태 설정
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <IntroMain ref={introMainRef}>
            <IntroMainImage  className={isScrolled ? "scrolled" : ""}></IntroMainImage>
            <IntroMainVisual  className={isScrolled ? "scrolled" : ""}></IntroMainVisual>
            <IntroMainWrapper className={isScrolled ? "scrolled" : ""}>
                <IntroMainText> Dream </IntroMainText>
                <IntroSubText> Your </IntroSubText>
                <SectionTitle text={{ title: "Xperience", subTitle: "Studio" }} direction="left" />
                <IntroSubText> and </IntroSubText>
                <SectionTitle text={{ title: "Ideal", subTitle: "EDDA" }} direction="right" />
                <IntroDetail>자신의 경험과 이상을 꿈꾸어라</IntroDetail>
            </IntroMainWrapper>
        </IntroMain>
    );
};

export default MainVisual;
