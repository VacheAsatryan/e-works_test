import SliderComponent from "../sliderComponent/SliderComponent";
import "./main.css";
import sansplexImage from "../../assets/images/sansplexImage.png";
import edumarkImage from "../../assets/images/edumarkImage.png";
import earthugardiansImage from "../../assets/images/earthugardiansImage.png";
import enjoImage from "../../assets/images/enjoImage.png";
import collideImage from "../../assets/images/collideImage.png";
import eventquestImage from "../../assets/images/eventquestImage.png";
import jobFinderImage from "../../assets/images/jobFinderImage.png";
import textVideo from "../../assets/videos/textVideo.mp4";
// import MorphingTextComponent from "../morphText/MorphTextComponent";
// import { MetalHandSvg } from "../../assets/icons/metalHand";
import emoji from "../../assets/images/Emoji.png";
import { ArrowRightSvg } from "../../assets/icons/arrowRight";

const Main = () => {
  const sliderArray = [
    sansplexImage,
    edumarkImage,
    earthugardiansImage,
    enjoImage,
    collideImage,
    eventquestImage,
    jobFinderImage,
  ];
  return (
    <div className="main">
      <div style={{ width: "100%" }}>
        <div className="description_container">
          <h3 className="description">Create community sites, code-free</h3>
          <img className="emoji" src={emoji} alt="emojy" />
        </div>

        <video className="text-video" autoPlay muted loop playsInline>
          <source src={textVideo} type="video/mp4" />
        </video>
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
        {/* <MorphingTextComponent /> */}
      </div>
      <SliderComponent className="slider-container" sliderArray={sliderArray} />
      <SliderComponent
        direction="left"
        className="slider-containerReverse"
        sliderArray={sliderArray}
      />
    </div>
  );
};

export default Main;
