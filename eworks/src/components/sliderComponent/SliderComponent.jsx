import "./slider.css";
import CardComponent from "../cardComponent/CardComponent";

const SliderComponent = ({ className, direction = "right", sliderArray }) => {
  const slides = sliderArray?.map((el, index) => {
    console.log(el, "el");
    return (
      <div key={index} className="slider-item">
        <CardComponent imageSrc={el} />
      </div>
    );
  });

  return (
    <div className={`${className} slider-wrapper`}>
      <div
        className="slider-track"
        style={{
          animationDirection: direction === "left" ? "reverse" : "normal",
        }}
      >
        {slides}
        {slides}
      </div>
    </div>
  );
};

export default SliderComponent;
