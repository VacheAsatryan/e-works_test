import SliderComponent from "../sliderComponent/SliderComponent";
import "./main.css";

// import MorphingTextComponent from "../morphText/MorphTextComponent";
// import { MetalHandSvg } from "../../assets/icons/metalHand";
import emoji from "../../assets/images/Emoji.png";
import backgroundImage from "../../assets/images/Group.png";
import { ArrowRightSvg } from "../../assets/icons/arrowRight";
import styled from "styled-components";
import BothSliderComponent from "../bothSlidersComponent/BothSliderComponent";
import AutoPlay from "../sliderComponent/SliderComponent";

const MainSection = styled.div`
  max-width: 1920px;
  width: 100%;
  height: 850px !important;
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0.557);
  backdrop-filter: blur(8px);
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  backdrop-filter: blur(8px);
  display: flex;
  overflow: hidden;
  padding-top: 196px;
  position: relative;
`;

const Main = () => {
  return (
    <MainSection>
      <div
        style={{
          width: "100%",
          maxWidth: "1283px",
          margin: "0 auto",
          zIndex: 999,
        }}
      >
        <div className="description_container">
          <h3 className="description">Create community sites, code-free</h3>
          <img className="emoji" src={emoji} alt="emojy" />
        </div>
        {/* <MorphingTextComponent /> */}

        <h3 className="engagement">
          The most versatile, and feature-rich engagement platform.Browse
          beautifully designed templates, effortlessly customize it to meet your
          specific requirements.
        </h3>
        <div className="button_box">
          <button className="but started">Get started for free</button>
          <button className="but browse">
            {" "}
            Browse templates <ArrowRightSvg fill="white" />{" "}
          </button>
        </div>
        {/* <div className="text-container">
          <div className="text">Knowledge Bases</div>
          <div className="text">Help Centers</div>
          <div className="text">Listing sites</div>
          
          <div className="text">social network</div>
          <div className="text">Client Portals</div>
          <div className="text">Media sharing sites</div>
          <div className="text">support community </div>
          <div className="text">directories</div>
          <div className="text">blog and publications</div>
        </div> */}
      </div>
      <BothSliderComponent />

      {/* <SliderComponent
        direction="left"
        className="slider-containerReverse"
        sliderArray={sliderArray}
      /> */}
    </MainSection>
  );
};

export default Main;
