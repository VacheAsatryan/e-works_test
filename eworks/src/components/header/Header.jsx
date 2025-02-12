import { ArrowDownSvg } from "../../assets/icons/arrowDown";
import { BetterModeSvg } from "../../assets/icons/bettermode";
import GetStartedButton from "../GetStartedButton/GetStartedButton";
import "./header.css";
const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo_container">
          <div className="logo">
            <BetterModeSvg />
          </div>
        </div>
        <nav className="nav">
          <a href="#about">
            Product <ArrowDownSvg />
          </a>
          <a href="#about">template</a>
          <a href="#contact">Enterprise</a>
          <a href="#Pricing">Pricing</a>
          <a href="#Community">Community</a>
        </nav>
        <div className="buttons">
          <button className="login">Log in</button>

          <GetStartedButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
