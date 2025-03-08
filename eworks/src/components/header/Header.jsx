import { useEffect, useState } from "react";
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

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  console.log(windowSize, "window");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  return (
    <StyledHeader>
      <Container>
        <LogoContainer>
          <Logo>
            <a href="/">
              <BetterModeSvg
                height={windowSize > 1920 ? "40%" : "32px"}
                width={windowSize > 1920 ? "40%" : "32px"}
              />{" "}
            </a>
            <h1>bettermode</h1>
          </Logo>
          <Nav isOpen={isMenuOpen}>
            <ul>
              <li href="#about" onClick={closeMenu}>
                Product <ArrowDownSvg />
              </li>
              <li href="#about" onClick={closeMenu}>
                Template
              </li>
              <li href="#contact" onClick={closeMenu}>
                Enterprise
              </li>
              <li href="#Pricing" onClick={closeMenu}>
                Pricing
              </li>
              <li href="#Community" onClick={closeMenu}>
                Community
              </li>
            </ul>
            <MobileButtons>
              <LoginButton onClick={closeMenu}>Log in</LoginButton>
              <GetStartedButton onClick={closeMenu} />
            </MobileButtons>
          </Nav>
        </LogoContainer>

        <HamburgerButton onClick={toggleMenu}>
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </HamburgerButton>
        <Buttons>
          <LoginButton onClick={closeMenu}>Log in</LoginButton>
          <GetStartedButton onClick={closeMenu} />
        </Buttons>
      </Container>
    </StyledHeader>
  );
};

export default Header;
