import styled from "styled-components";
import backgroundImage from "../../assets/images/Group.png";
import { media } from "../../assets/style/theme";


export const MainSection = styled.div`
  width: 100%;
  height: 847px;
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0.557);
  backdrop-filter: blur(8px);
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  display: flex;
  overflow: hidden;
   ${media.tablet} {
    padding:0 20px;
    }

  ${media.mobile} {

  }
  ${media.largeDesktop}{
    height:70vh;
  }
`;

export const DescriptionContainer = styled.div`
  width: fit-content;
  display: flex;
  gap: 14px;
  align-items: center;
`;

export const Description = styled.h3`
  color: #fff;
  font-size: 20px;
  line-height: 25px;
  font-family: "TT Interphases Pro";
`;

export const Emoji = styled.img`
  width: 25px;
  height: 37px;
  animation: fastShake 0.8s infinite;

  @keyframes fastShake {
    0% {
      transform: rotateZ(9deg);
    }
    25% {
      transform: rotateZ(-20deg);
    }
    50% {
      transform: rotateZ(9deg);
    }
    75% {
      transform: rotateZ(-20deg);
    }
    100% {
      transform: rotateZ(9deg);
    }
  }
`;

export const Engagement = styled.h3`
  font-family: "TT Interphases Pro";
  color: white;
  font-size: 20px;
  line-height: 28.8px;
  max-width: 634px;
  margin-top: 18px;
  font-weight: 400;
    ${media.tablet}{
    font-size:14px;
    margin-top:0
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  gap: 27px;
  padding-top: 40px;
`;

export const Button = styled.button`
  padding: 15px 20px;
  font-family: "TT Interphases Pro";
  border-radius: 60px;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const StartedButton = styled(Button)`
  background: rgba(70, 203, 25, 1);
  color: black;
  border: none;
    ${media.tablet}{
    font-size:10px;
  }
`;

export const BrowseButton = styled(Button)`
  background: transparent;
  color: white;
  border: 1px solid white;
  ${media.tablet}{
    font-size:10px;
  }
`;
export const TextContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  z-index: 999;
  margin-top:23vh;
  margin-left:20px;
  width:fit-content;
  height:fit-content;
  ${media.tablet} {
  backdrop-filter:blur(10px)

  }
  ${media.largeDesktop}{
  margin-left:18%;
  }
`;
