import BothSliderComponent from "../bothSlidersComponent/BothSliderComponent";
import { ArrowRightSvg } from "../../assets/icons/arrowRight";
import emoji from "../../assets/images/Emoji.png";
import {
  MainSection,
  DescriptionContainer,
  Description,
  Emoji,
  Engagement,
  ButtonBox,
  StartedButton,
  BrowseButton,
  TextContainer,
} from "./main.styles";
import MorphingTextWithBlobs from "../morphText/MorphTextComponent";

const Main = () => {
  return (
    <MainSection>
      <TextContainer>
        <DescriptionContainer>
          <Description>Create community sites, code-free</Description>
          <Emoji src={emoji} alt="emoji" />
        </DescriptionContainer>
        <MorphingTextWithBlobs />
        <Engagement>
          The most versatile, and feature-rich engagement platform. Browse
          beautifully designed templates, effortlessly customize it to meet your
          specific requirements.
        </Engagement>

        <ButtonBox>
          <StartedButton>Get started for free</StartedButton>
          <BrowseButton>
            Browse templates <ArrowRightSvg fill="white" />
          </BrowseButton>
        </ButtonBox>
      </TextContainer>
      <BothSliderComponent />
    </MainSection>
  );
};

export default Main;
