import { useState } from "react";
import { ArrowDownSvg } from "../../assets/icons/arrowDown";
import { BetterModeSvg } from "../../assets/icons/bettermode";
import GetStartedButton from "../GetStartedButton/GetStartedButton";
import {
  Buttons,
  Container,
  LoginButton,
  Logo,
  LogoContainer,
  Nav,
  StyledHeader,
  HamburgerButton,
  MobileButtons,
} from "./header.styles";

// SVG иконки для меню
const MenuIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 12H21"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3 6H21"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3 18H21"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CloseIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18 6L6 18"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6 6L18 18"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <StyledHeader>
      <Container>
        <LogoContainer>
          <Logo>
            <BetterModeSvg />
          </Logo>
        </LogoContainer>

        <HamburgerButton onClick={toggleMenu}>
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </HamburgerButton>

        <Nav isOpen={isMenuOpen}>
          <a href="#about" onClick={closeMenu}>
            Product <ArrowDownSvg />
          </a>
          <a href="#about" onClick={closeMenu}>
            Template
          </a>
          <a href="#contact" onClick={closeMenu}>
            Enterprise
          </a>
          <a href="#Pricing" onClick={closeMenu}>
            Pricing
          </a>
          <a href="#Community" onClick={closeMenu}>
            Community
          </a>
          <MobileButtons>
            <LoginButton onClick={closeMenu}>Log in</LoginButton>
            <GetStartedButton onClick={closeMenu} />
          </MobileButtons>
        </Nav>

        <Buttons>
          <LoginButton onClick={closeMenu}>Log in</LoginButton>
          <GetStartedButton onClick={closeMenu} />
        </Buttons>
      </Container>
    </StyledHeader>
  );
};

export default Header;
