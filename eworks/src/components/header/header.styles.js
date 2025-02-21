// styles/Header.styles.js
import styled from "styled-components";
import { media } from "../../assets/style/theme";

export const StyledHeader = styled.header`
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  position: sticky;
  top: 0;
  background: #0000009b;
  backdrop-filter: blur(8px);
  z-index: 999;
  padding: 28px 0px;

  ${media.mobile} {
    padding: 10px;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  width: 100%;
  max-width: 1283px;
  gap: 20px;
  align-items: center;
  margin: 0 auto;

  ${media.tablet} {
  padding: 0 20px;
    grid-template-columns: 2fr auto;
    gap: 10px;
  }
     ${media.desktop} {
    padding: 0 20px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 26px;
`;

export const Logo = styled.div`
  display: flex;
  gap: 8px;
  
  ${media.tablet} {
    width: 100px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 20px;
  align-items: center;

  a {
    text-decoration: none;
    color: #fff;
    font-family: "TT Interphases Pro";
  }

  ${media.tablet} {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    background: #0000009b;
    backdrop-filter: blur(8px);
    flex-direction: column;
    padding: 20px;
    
    a {
      font-size: 16px;
      padding: 10px 0;
    }
  }
`;

export const Buttons = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;

  ${media.tablet} {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

export const LoginButton = styled.button`
  padding: 8px 16px;
  border: none;
  cursor: pointer;
  background: transparent;
  color: white;
  font-family: "TT Interphases Pro";
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;

  ${media.tablet} {
    font-size: 14px;
    width: 100%;
    padding: 12px;
  }
`;

export const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  padding: 10px;

  ${media.tablet} {
    display: block;
    order: 1;
  }
`;

export const MobileMenu = styled.div`
  display: none;

  ${media.tablet} {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    background: #0000009b;
    backdrop-filter: blur(8px);
    padding: 20px;
  }
`;