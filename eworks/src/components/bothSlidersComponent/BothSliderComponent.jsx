import styled from "styled-components";
import AutoPlay from "../sliderComponent/SliderComponent";
import { media } from "../../assets/style/theme";
media;

const StyledDiv = styled.div`
  width: 100%;
  min-width: 1609px;
  position: absolute;
  top: 57%;
  right: -15%;
  transform: rotate(-30deg) skewX(30deg);
  ${media.tablet} {
    top: 70%;
  }
  ${media.mobile} {
    top: 20%;
    left: -5%;
  }
`;

const BothSliderComponent = () => {
  return (
    <StyledDiv>
      <AutoPlay direction="left" />
      <AutoPlay direction="right" />
    </StyledDiv>
  );
};

export default BothSliderComponent;
