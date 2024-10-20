import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import _ from "lodash";

import { HEADER_LINKS } from "@consts/header";

import { Button } from "@styles/commons/button.style";

import {
  HeaderWrapper,
  MainHeader,
  HeaderLogo,
  HeaderNavBar,
  HamburgerMenus,
  HamburgerMenusWrapper,
  HamburgerMenu,
  HamburgerMenuHeader,
  HamburgerHeaderLogo,
  HamburgerMenuText,
} from "src/styles/header.style";

import HeaderLogoImage from "@assets/images/logos/header-logo.png";
import HamburgerHeaderLogoImage from "@assets/images/logos/logo-white.png";

import CloseSvg from "@assets/images/svgs/close.svg";
import HamburgerSvg from "@assets/images/svgs/hamburger.svg";
import RightBracketSvg from "@assets/images/svgs/right-bracket.svg";

import type { FC } from "react";

const Header: FC = () => {
  const MOBILE_SCROLL_DEBOUNCE_TIME = 500;

  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [hamburgerMenusPadTop, setHamburgerMenusPadTop] = useState(0);

  const handleOpenMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (!isMenuOpened) {
      document.body.style.overflow = "hidden";
      setIsMenuOpened(true);
    }
  };

  const handleCloseMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (isMenuOpened) {
      document.body.style.overflow = "auto";
      setIsMenuOpened(false);
    }
  };

  const handleScrollMobileMenus = _.debounce((e: Event) => {
    e.preventDefault();
    e.stopPropagation();

    setHamburgerMenusPadTop(window.scrollY);
  }, MOBILE_SCROLL_DEBOUNCE_TIME);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollMobileMenus);

    return () => {
      window.removeEventListener("scroll", handleScrollMobileMenus);
    };
  }, [handleScrollMobileMenus]);

  return (
    <HeaderWrapper>
      <MainHeader>
        <HeaderLogo src={HeaderLogoImage} alt="로고 이미지" />
        <HeaderNavBar $length={HEADER_LINKS.length}>
          {HEADER_LINKS.map(({ text, to }, index) => (
            <Link key={`${index}-${text}`} to={to}>
              <span>{text.kor}</span>
            </Link>
          ))}
        </HeaderNavBar>
        <Button onClick={handleOpenMenu}>
          <img src={HamburgerSvg} alt="햄버거 svg 이미지" />
        </Button>
        {createPortal(
          <HamburgerMenusWrapper
            className={isMenuOpened ? "show" : ""}
            $padTop={hamburgerMenusPadTop}
          >
            <HamburgerMenuHeader>
              <HamburgerHeaderLogo
                src={HamburgerHeaderLogoImage}
                alt="흰색 로고 이미지"
              />
              <Button onClick={handleCloseMenu}>
                <img src={CloseSvg} alt="닫음 svg 이미지" />
              </Button>
            </HamburgerMenuHeader>
            <HamburgerMenus className={isMenuOpened ? "show" : ""}>
              {HEADER_LINKS.map(({ text, to }, index) => (
                <HamburgerMenu key={`${index}-${text}-mobile`}>
                  <Link to={to} reloadDocument>
                    <HamburgerMenuText>
                      <span>{text.eng.toUpperCase()}</span>
                      <span>{text.kor}</span>
                    </HamburgerMenuText>
                    <img src={RightBracketSvg} alt="" />
                  </Link>
                </HamburgerMenu>
              ))}
            </HamburgerMenus>
          </HamburgerMenusWrapper>,
          document.body
        )}
      </MainHeader>
    </HeaderWrapper>
  );
};

export default Header;
