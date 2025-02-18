/* eslint-disable react/prop-types */
import "./cardComponent.css";

const CardComponent = ({ imageSrc }) => {
  return (
    <div className="card-container">
      <div className="card">
        <img src={imageSrc} alt="Card Image" />
      </div>
      <div className="card-reflection">
        <img src={imageSrc} alt="Card Reflection" />
      </div>
    </div>
  );
};

export default CardComponent;
