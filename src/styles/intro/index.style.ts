import styled from "styled-components";
import { CommonPageWrapper, CommonPage } from "@styles/index.style";
import { COLOR, FONT, RADIUS, SCREEN_MAX_WIDTH } from "@consts/style";
import { TitleWrapper } from "@styles/commons/section-title.style";

export const PageWrapper = styled.div`
    margin: 0 auto;
    width: 100%;
`;

export const Page = styled.div`
    margin: 0 auto;
    width: 100%;
`;

export const IntroMain = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 820px;
    height: 100%;
    position: relative;
`;

export const IntroMainImage = styled.div`
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 0;
    background: url("/images/studio-section01-bg.png") no-repeat center center;
    background-size: cover;
`;

export const IntroMainVisual = styled.div`
    width: 100%;
    object-fit: cover;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 10;
    background: url("/images/studio-section01-bg2.png") no-repeat center bottom;
    background-size: contain;
    mix-blend-mode: color-dodge;
    filter: brightness(3);

    @media (min-width: 768px) {
        height: 810px;
    }
    @media (max-width: 767px) {
        height: 640px;
    }
`;

export const IntroMainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-height: 820px;
    height: 100%;
    position: relative;
    z-index: 20;

    & > * ~ * {
        margin: 10px 0 0;
    }
    & > * {
        transition: all 1.6s;
        transform: translateX(0);
        opacity: 0;
    }

    &.scrolled {
        & > * {
            opacity: 1;
        }

        & > *:nth-child(2) {
            transition-delay: 0s;
            @media (min-width: 768px) {
                transform: translateX(60px);
            }
            @media (max-width: 767px) {
                transform: translateX(30px);
            }
        }
        & > *:nth-child(3) {
            transition-delay: 0.4s;
            @media (min-width: 768px) {
                transform: translateX(-25px);
            }
        }
        & > *:nth-child(4) {
            transition-delay: 0.6s;
            @media (min-width: 768px) {
                transform: translateX(-60px);
            }
            @media (max-width: 767px) {
                transform: translateX(-30px);
            }
        }
        & > *:nth-child(5) {
            transition-delay: 0.8s;
            @media (min-width: 768px) {
                transform: translateX(50px);
            }
            @media (max-width: 767px) {
                transform: translateX(-30px);
            }
        }
        p:last-of-type {
            transition-delay: 1.6s;
        }
    }
`;

export const IntroMainText = styled.p`
    font-size: 72px;
    font-family: "SUSE";
    font-weight: 300;
    color: #222;
    text-align: center;
    @media (max-width: 768px) {
        font-size: 48px;
    }
`;
export const IntroSubText = styled.p`
    font-size: 48px;
    font-family: "SUSE";
    font-weight: 300;
    color: #222;
    text-align: center;
    @media (max-width: 768px) {
        font-size: 32px;
    }
`;

export const IntroDetail = styled.p`
    font-size: 18px;
    color: #222;
    text-align: center;
    margin-top: 48px;
    font-weight: 500;
`;
export const StudioInfoBox = styled.div`
    background: url("/images/studio-section02-bg.png") center center;
    position: relative;
    width: 100%;
    overflow: hidden;
`;

export const StudioInfoWrapper = styled.div`
    padding: 200px 0;
    position: relative;
    z-index: 10;

    & > ${TitleWrapper} {
        opacity: 0;
        transform: translateY(-50px);
        transition: all 1.6s;
    }

    & > p:first-of-type {
        opacity: 0;
        transform: translateY(50px);
        transition: all 0.6s;
    }

    &.scrolled > ${TitleWrapper}, &.scrolled > p:first-of-type {
        opacity: 1;
        transform: translateY(0);
    }
`;

export const SubTitle = styled.p`
    font-size: 28px;
    font-weight: 900;
    text-align: center;
    margin-top: 100px;

    @media (max-width: 1200px) {
        font-size: 24px;
        margin-top: 70px;
    }

    @media (max-width: 768px) {
        font-size: 18px;
        margin-top: 50px;
    }

    @media (max-width: 360px) {
        font-size: 16px;
        margin-top: 50px;
    }
`;

export const IntroBoxWrapper = styled.div`
    display: grid;

    gap: 30px;
    max-width: 1170px;
    margin: 80px auto 100px;

    @media (min-width: 1170px) {
        grid-template-columns: repeat(12, 1fr);
        gap: 16px;
    }

    @media (max-width: 1169px) {
        grid-template-columns: repeat(6, 1fr);
        gap: 16px;
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(8, 1fr);
        gap: 8px;
    }

    p {
        text-align: center;
        line-height: 1.6;
        @media (min-width: 768px) {
            margin-top: 40px;
            font-size: ${FONT.pc.normal};
        }
        @media (max-width: 767px) {
            margin-top: 10px;
            font-size: ${FONT.mobile.normal};
        }
    }
    p strong {
        font-weight: 800;
    }
`;

export const IntroHarfBoxLeft = styled.div`
    display: flex;
    flex-direction: column;
    @media (min-width: 1170px) {
        grid-column: 1 / 7;
    }
    @media (max-width: 1169px) {
        grid-column: 1 / 4;
    }
    @media (max-width: 767px) {
        grid-column: 1 / 9;
    }

    & > * {
        transition: all 0.8s;
        opacity: 0;
    }

    div {
        transform: translateX(-50px);
    }

    p {
        transform: translateX(50px);
    }

    &.scrolled {
        * {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;

export const IntroHarfBoxRight = styled.div`
    display: flex;
    flex-direction: column;
    @media (min-width: 1170px) {
        grid-column: 7 / 13;
    }
    @media (max-width: 1169px) {
        grid-column: 4 / 7;
    }
    @media (max-width: 767px) {
        grid-column: 1 / 9;
        margin-top: 50px;
    }

    & > * {
        transition: all 0.8s;
        opacity: 0;
    }

    div {
        transform: translateX(-50px);
    }

    p {
        transform: translateX(50px);
    }

    &.scrolled {
        * {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;

export const StudioLogo = styled.div`
    width: 100%;
    height: 190px;
    padding: 0 100px;
    box-sizing: border-box;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    @media (max-width: 1169px) {
        padding: 30px 50px;
    }

    @media (max-width: 768px) {
        padding: 40px;
    }
`;

export const IntroFullBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;

    p {
        text-align: center;
        line-height: 1.6;
        font-size: ${FONT.pc.normal};
        @media (max-width: 768px) {
            font-size: ${FONT.mobile.normal};
        }
    }
    p strong {
        font-weight: 800;
        color: ${COLOR.mainColor};
    }
    b {
        font-weight: 800;
    }

    @media (max-width: 1169px) {
        padding: 0 30px;
    }

    @media (max-width: 768px) {
        padding: 0px;
    }

    & > * {
        transition: all 0.8s;
        opacity: 0;
    }

    & > div {
        transform: translateY(-50px);
    }
    & > p {
        transform: translateY(50px);
    }

    &.scrolled {
        & > * {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;

export const FullBoxLogo = styled.div`
    width: 100%;
    height: 350px;
    padding: 50px;
    box-sizing: border-box;
    max-width: 1170px;
    margin: 0 auto 50px;
    position: relative;
    border-radius: ${RADIUS.pc};
    background: ${COLOR.mainColor};

    @media (max-width: 1169px) {
        border-radius: ${RADIUS.tablet};
        height: 300px;
    }

    @media (max-width: 768px) {
        border-radius: 0;
        height: 220px;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    position: relative;
`;

export const StudioVisualBehind = styled.div`
    position: absolute;
    bottom: 0;
    right: 0%;
    width: 100%;
    background: url("/images/studio-section02-bg02.png") no-repeat center bottom;
    background-size: contain;
    z-index: 3;
    transform: translateX(750px);
    transition-delay: 1.6s;

    @media (min-width: 1170px) {
        height: 1030px;
    }
    @media (max-width: 1169px) {
        height: 960px;
        left: auto;
        right: 0;
        transform: translateX(300px);
    }
    @media (max-width: 767px) {
        height: 540px;
        left: auto;
        right: 0;
        transform: translateX(200px);
        bottom: 450px;
    }

    opacity: 0;
    transition: all 1.6s;

    &.scrolled {
        opacity: 1;
    }
`;

export const StudioVisualFoward = styled.div`
    position: absolute;
    bottom: 0;
    right: 0%;
    width: 100%;
    background: url("/images/studio-section02-bg01.png") no-repeat center bottom;
    background-size: contain;
    z-index: 5;
    transform: translateX(750px);
    transition-delay: 1.6s;

    @media (min-width: 1170px) {
        height: 1030px;
    }
    @media (max-width: 1169px) {
        height: 960px;
        left: auto;
        right: 0;
        transform: translateX(300px);
    }
    @media (max-width: 767px) {
        height: 540px;
        left: auto;
        right: 0;
        transform: translateX(200px);
        bottom: 450px;
    }

    opacity: 0;
    transition: opacity 1.6s;

    &.scrolled {
        opacity: 1;
    }
`;

export const StarsLeft = styled.div`
    position: absolute;
    top: -40px;
    left: -40px;
    width: 60px;
    height: 30px;
    background: url("/images/stars.svg") no-repeat center center;
    background-size: contain;
    z-index: 1;

    @media (max-width: 1169px) {
        width: 40px;
        height: 20px;
        top: -40px;
        left: -10px;
    }

    @media (max-width: 768px) {
        display: none;
    }
`;
export const StarsRight = styled.div`
    position: absolute;
    bottom: -40px;
    right: -40px;
    width: 60px;
    height: 30px;
    background: url("/images/stars.svg") no-repeat center center;
    background-size: contain;
    z-index: 1;
    transform: rotate(180deg);

    @media (max-width: 1169px) {
        width: 40px;
        height: 20px;
        bottom: -40px;
        right: -10px;
    }

    @media (max-width: 768px) {
        display: none;
    }
`;

// section3 툰

export const StudioToonBox = styled.div`
    background: rgba(188, 205, 247, 0.15);
    position: relative;
    width: 100%;
    overflow: hidden;
`;

export const StudioToonWrapper = styled.div`
    padding: 200px 0;
    position: relative;
    z-index: 10;
`;

export const ToonDetail = styled.p`
    font-size: ${FONT.pc.normal};
    color: #222;
    text-align: center;
    margin-top: 60px;
    font-weight: 400;
    line-height: 1.6;
`;

export const ToonItemWrapper = styled.div.attrs((props) => ({}))<{ childrenCount: number }>`
    display: flex;
    justify-content: center;
    width: auto;
    max-width: 1170px;
    margin: 100px auto;
    gap: 30px;
    position: relative;
    box-sizing: border-box;

    @media (max-width: 1169px) {
        width: 66.66%;
        gap: 16px;
        flex-wrap: wrap;
    }
    @media (max-width: 768px) {
        width: 100%;
        gap: 30px;
        flex-direction: column;
        padding: 0 16px;
        flex-wrap: nowrap;
        margin: 60px auto;
    }

    & > a:nth-of-type(even) {
        transform: translateY(50px);

        @media (max-width: 1169px) {
            transform: translateY(100px);
        }
        @media (max-width: 768px) {
            transform: translateY(0px);
            align-self: flex-end;
        }
    }

    ${(props) =>
        props.childrenCount <= 1 &&
        `

        @media (max-width: 1169px) {
            & > *{position: relative;}

            & > *::before {
                display: block !important;
            }
            & > *::after {
                display: block !important;
            }
        }

        @media (max-width: 768px) {
            & > *::before, & > *::after {
                display: none !important;
            }
            align-items: center;
            &::before {
                content: "";
                position: absolute;
                top: 0px;
                right: 16px;
                width: 30px;
                height: 30px;
                background: url("/images/stars.svg") no-repeat center right;
                background-size: contain;
                z-index: 1;
            }
            &::after {
                content: "";
                position: absolute;
                bottom: 0px;
                left: 16px;
                width: 30px;
                height: 30px;
                background: url("/images/stars.svg") no-repeat center left;
                background-size: contain;
                z-index: 1;
            }
        }
    `}
    ${(props) =>
        props.childrenCount >= 2 &&
        `
        position: relative;

        @media (max-width: 1169px) {
            justify-content: space-between;
            &::before {
                content: "";
                position: absolute;
                top: 0px;
                right: 0px;
                width: 60px;
                height: 30px;
                background: url("/images/stars.svg") no-repeat center right;
                background-size: contain;
                z-index: 1;
            }
            &::after {
                content: "";
                position: absolute;
                bottom: -100px;
                left: 0px;
                width: 60px;
                height: 30px;
                background: url("/images/stars.svg") no-repeat center left;
                background-size: contain;
                z-index: 1;
            }
        }
    `}

        ${(props) =>
        props.childrenCount % 2 !== 0 &&
        props.childrenCount > 1 &&
        `
        @media (max-width: 768px) {
            justify-content: space-between;
            &::before {
                content: "";
                position: absolute;
                top: 0px;
                right: 16px;
                width: 30px;
                height: 30px;
                background: url("/images/stars.svg") no-repeat center right;
                background-size: contain;
                z-index: 1;
            }
            &::after {
                content: "";
                position: absolute;
                bottom: 0px;
                left: auto;
                right: 16px;
                width: 30px;
                height: 30px;
                background: url("/images/stars.svg") no-repeat center left;
                background-size: contain;
                z-index: 1;
            }
        }
        `}
    ${(props) =>
        props.childrenCount % 2 === 0 &&
        props.childrenCount > 1 &&
        `
            @media (max-width: 768px) {
                justify-content: space-between;
                &::before {
                    content: "";
                    position: absolute;
                    top: 0px;
                    right: 16px;
                    width: 30px;
                    height: 30px;
                    background: url("/images/stars.svg") no-repeat center right;
                    background-size: contain;
                    z-index: 1;
                }
                &::after {
                    content: "";
                    position: absolute;
                    bottom: 0px;
                    left: 16px;
                    width: 30px;
                    height: 30px;
                    background: url("/images/stars.svg") no-repeat center left;
                    background-size: contain;
                    z-index: 1;
                }
            }
    `}
`;

export const ToonItem = styled.a`
    width: 25%;
    height: 300px;
    border-radius: ${RADIUS.pc};
    background: #fff;
    position: relative;
    cursor: pointer;

    @media (max-width: 1168px) {
        width: calc(50% - 8px);
        height: 260px;
    }
    @media (max-width: 768px) {
        width: 75%;
        height: 240px;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: ${RADIUS.pc};

        @media (max-width: 1169px) {
            border-radius: ${RADIUS.tablet};
        }

        @media (max-width: 768px) {
            border-radius: ${RADIUS.mobile};
        }
    }

    box-shadow: 5px 10px 15px rgba(188, 205, 247, 0.25);

    &:first-of-type {
        position: relative;
        z-index: 1;

        &::before {
            content: "";
            position: absolute;
            bottom: -60px;
            left: 0px;
            width: 60px;
            height: 30px;
            background: url("/images/stars.svg") no-repeat center center;
            background-size: contain;
            z-index: 1;

            @media (max-width: 1169px) {
                display: none;
            }
        }
    }

    &:last-of-type {
        position: relative;
        z-index: 1;

        &::after {
            content: "";
            position: absolute;
            top: -60px;
            right: 0px;
            width: 60px;
            height: 30px;
            background: url("/images/stars.svg") no-repeat center center;
            background-size: contain;
            z-index: 1;
            transform: rotate(180deg);

            @media (max-width: 1169px) {
                display: none;
            }
        }
    }
`;

export const ToonInfo = styled.div`
    width: 100%;
    height: 60px;
    background: ${COLOR.mainColor};
    border-radius: 0 0 ${RADIUS.pc} ${RADIUS.pc};
    color: #fff;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;

    strong {
        font-weight: 700;
        margin-right: 5px;
    }

    @media (max-width: 1169px) {
        border-radius: 0 0 ${RADIUS.tablet} ${RADIUS.tablet};
    }

    @media (max-width: 768px) {
        border-radius: 0 0 ${RADIUS.mobile} ${RADIUS.mobile};
    }
`;

export const ToonVisual = styled.div`
    position: absolute;
    bottom: 0;
    left: 0%;
    width: 100%;
    background: url("/images/studio-section03-bg.png") no-repeat center bottom;
    background-size: contain;
    z-index: 5;
    transform: translateX(-750px);
    transition-delay: 1.6s;

    @media (min-width: 1170px) {
        height: 890px;
    }
    @media (max-width: 1169px) {
        height: 800px;
        left: 0;
        transform: translateX(-300px);
    }
    @media (max-width: 767px) {
        height: 600px;
        left: 0;
        transform: translateX(-250px);        
    }
/* 
    opacity: 0;
    transition: opacity 1.6s; */
/* 
    &.scrolled {
        opacity: 1;
    } */
`;
