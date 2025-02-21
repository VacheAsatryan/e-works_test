import { ArrowRightSvg } from "../../assets/icons/arrowRight";
import {
  AnimatedButton,
  BorderBottomDot,
  BorderTopDot,
  ButtonWrapper,
  FreeText,
} from "./button.styles";

const GetStartedButton = () => {
  return (
    <ButtonWrapper>
      <AnimatedButton>
        Get started for <FreeText>free</FreeText>
        <ArrowRightSvg fill="black" />
      </AnimatedButton>
      <BorderTopDot />
      <BorderBottomDot />
    </ButtonWrapper>
  );
};

export default GetStartedButton;
