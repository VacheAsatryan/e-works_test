/* eslint-disable react/prop-types */
import {
  Card,
  CardContainer,
  CardImage,
  CardReflection,
} from "./cardComponent.styles";

const CardComponent = ({ imageSrc }) => {
  return (
    <CardContainer>
      <Card>
        <CardImage src={imageSrc} alt="Card Image" />
      </Card>
      <CardReflection>
        <CardImage src={imageSrc} alt="Card Reflection" />
      </CardReflection>
    </CardContainer>
  );
};
export default CardComponent;
