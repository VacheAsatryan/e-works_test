import { ArrowRightSvg } from "../../assets/icons/arrowRight";
import "./getStartedButton.css";

const GetStartedButton = () => {
  return (
    <div className="button-wrapper">
      <button className="animated-button">
        Get started for
        <span style={{ fontWeight: "800", color: "black" }}>free</span>
        <ArrowRightSvg fill="black" />
      </button>
      <div className="border-top-dot"></div>
      <div className="border-bottom-dot"></div>
    </div>
  );
};

export default GetStartedButton;
