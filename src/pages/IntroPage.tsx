import React, { useState, useEffect } from 'react';
import { Helmet } from "react-helmet";

import MainVisual from "@components/intro/MainVisual";
import StudioInfo from "@components/intro/StudioInfo";

import { PageWrapper, Page } from "@styles/intro/index.style";

import type { FC } from "react";
import StudioToon from "@components/intro/StudioToon";

const IntroPage: FC = () => {
    const TITLE = "Studio EDDA - 스튜디오 소개";

    const [scrollY, setScrollY] = useState(0);

    const handleScroll = (event: WheelEvent) => {
        setScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('wheel', handleScroll);
        return () => {
            window.removeEventListener('wheel', handleScroll);
        };
    }, []);
    
    return (
        <PageWrapper>
            <Page>
                <Helmet>
                    <title>{TITLE}</title>
                </Helmet>

                <MainVisual scrollY={scrollY} />

                <StudioInfo scrollY={scrollY} />

                <StudioToon scrollY={scrollY} />
            </Page>
        </PageWrapper>
    );
};

export default IntroPage;
