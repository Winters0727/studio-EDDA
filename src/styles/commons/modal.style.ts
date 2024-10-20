import styled from "styled-components";

export const ModalWrapper = styled.div`
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(14, 0, 78, 0.75);
    z-index: 9999;

    &.open {
        display: block;
    }
`;

export const ModalBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 15px 35px rgba(35, 28, 84, 1);
    border-radius: 16px;
    &.toon {
        max-width: 512px;
        width: 82.5%;
        background: #fff;
    }
    &.video {
        max-width: 1200px;
        background: #fff;
        width: 100%;
    }
`;

export const ModalCloseButton = styled.button`
    position: absolute;
    width: 32px;
    height: 32px;
    background: url(/images/modal-close.svg) no-repeat center;
    top: 10px;
    right: 10px;
    background-color: transparent;
    border: none;
    font-size: 20px;
    cursor: pointer;
    overflow: hidden;
    text-indent: 1000%;
    z-index: 9999;

    &.video {
        top: -42px;
        right: 0px;
    }
`;

export const ModalItemWrapper = styled.div`
    position: relative;
    border-radius: 16px;
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;

    &::-webkit-scrollbar {
        display: none;
    }

    &.toon {
        max-width: 512px;
        padding-bottom: 0;
        height: 80vh;
        @supports (height: 80svh) {
            height: 80svh;
        }
        max-height: 800px;
        position: relative;
        background: #fff;

        img {
            width: 100%;
            height: auto;
            object-fit: cover;
        }
    }

    &.video {
        max-width: 1200px;
        padding-bottom: 56.25%;
        position: relative;
        padding: 0;
    }

    @media (min-width: 1170px) {
        width: 100%;
    }
    @media (max-width: 1169px) {
        width: calc(100% - 60px);
        height: 100%;
        left: 0px;
        max-height: 65svh;
    }
    @media (max-height: 820px) {
        width: 100%;
        padding-bottom: 0 !important;
        height: 65vh;
        @supports (height: 65svh) {
            height: 65svh;
        }
    }
`;

export const ToonWrapper = styled.div`
    overflow-y: scroll;
    position: absolute;
    width: 100%;
    height: auto;
    max-height: 100%;
    overflow-y: scroll;
    top: 50%;
    transform: translateY(-50%);
    box-sizing: border-box;
    background: #fff;
    border-radius: 16px;
    padding: 0 16px;

    &::-webkit-scrollbar {
        display: none;
    }
`;

export const Pagination = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 10px;
    position: absolute;
    bottom: -50px;
    width: 100%;
    gap: 5px;

    .page {
        width: 100%;
        height: 8px;
        background: #e9e9e9;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        margin-right: 5px;
        background: #fff;
        border-radius: 4px;

        &.active {
            background: #b1b3fe;
            color: #fff;
        }
    }
    
    @media (max-height: 767px) {
        bottom: -30px;
    }

`;

export const ModalControl = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: calc(100% + 100px);
    height: 1px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    @media (max-width: 1169px) {
        width: calc(100% + 150px);
    }
    @media (max-width: 767px) {
        width: calc(100% + 70px);
    }

    .modalbutton {
        width: 50px;
        height: 50px;
        background: url(/images/modal-arrow.svg) no-repeat center;
        background-size: 35%;
        cursor: pointer;
        z-index: 9999;

        &.next {
            transform: rotate(180deg);
        }

        @media (max-width: 1169px) {
            width: 40px;
            height: 40px;
        }
        @media (max-width: 767px) {
            background-size: 50%;
            width: 30px;
            height: 30px;
        }
    }
`;

export const ModalVideoWrapper = styled.div`
    position: relative;
    width: 100%;
    max-width: 1200px;
    padding-bottom: 56.25%;
    overflow: hidden;
    border-radius: 16px;

    iframe {
        position: absolute;
        width: calc(100% + 4px);
        height: calc(100% + 4px);
        top: -2px;
        left: -2px;
    }
`;
