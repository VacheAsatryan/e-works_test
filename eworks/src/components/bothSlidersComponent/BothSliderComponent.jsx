import styled from "styled-components";
import AutoPlay from "../sliderComponent/SliderComponent";

const StyledDiv = styled.div`
  width: 100%;
  min-width: 1609px;
  position: absolute;
  top: 57%;
  right: -15%;
  transform: rotate(-30deg) skewX(30deg);
  border: 1px solid red;
`;

const BothSliderComponent = () => {
  return (
    <StyledDiv>
      <AutoPlay />
      <AutoPlay />
    </StyledDiv>
  );
};

export default BothSliderComponent;
