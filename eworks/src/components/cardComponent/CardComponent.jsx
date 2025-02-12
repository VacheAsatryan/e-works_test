import "./cardComponent.css";

const CardComponent = ({ imageSrc }) => {
  return (
    <div className="card">
      <img src={imageSrc} alt="Card Image" />
    </div>
  );
};

export default CardComponent;
