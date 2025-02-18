import styled from "styled-components";
import { ArrowDownSvg } from "../../assets/icons/arrowDown";
import { BetterModeSvg } from "../../assets/icons/bettermode";
import GetStartedButton from "../getStartedButton/GetStartedButton";

const StyledHeader = styled.header`
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  position: sticky;
  top: 0;
  background: #0000009b;
  display: grid;
  grid-template-columns: 1fr auto auto;
  align-items: center;
  justify-content: center;
  padding: 28px 0px;
  backdrop-filter: blur(8px);
  z-index: 999;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  width: 100%;
  max-width: 1283px;
  gap: 20px;
  align-items: center;
  margin: 0 auto;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 26px;
`;

const Logo = styled.div`
  display: flex;
  gap: 8px;
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
  align-items: center;

  a {
    text-decoration: none;
    color: #fff;
    font-family: "TT Interphases Pro";
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`;

const LoginButton = styled.button`
  padding: 8px 16px;
  border: none;
  cursor: pointer;
  background: transparent;
  color: white;
  font-family: "TT Interphases Pro";
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <LogoContainer>
          <Logo>
            <BetterModeSvg />
          </Logo>
        </LogoContainer>
        <Nav>
          <a href="#about">
            Product <ArrowDownSvg />
          </a>
          <a href="#about">Template</a>
          <a href="#contact">Enterprise</a>
          <a href="#Pricing">Pricing</a>
          <a href="#Community">Community</a>
        </Nav>
        <Buttons>
          <LoginButton>Log in</LoginButton>
          <GetStartedButton />
        </Buttons>
      </Container>
    </StyledHeader>
  );
};

export default Header;
