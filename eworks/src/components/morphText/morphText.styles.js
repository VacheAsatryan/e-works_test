// styles/MorphingText.styles.js
import styled, { keyframes } from 'styled-components';
import { media } from '../../assets/style/theme';

const fadeIn = keyframes`
  0% {
    opacity: 0;
    filter: blur(20px);
  }
  40% {
    opacity: 0.6;
    filter: blur(5px);
  }
  100% {
    opacity: 1;
    filter: blur(0px);
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
    filter: blur(0px);
  }
  50% {
    opacity: 0.5;
    filter: blur(5px);
  }
  100% {
    opacity: 0;
    filter: blur(20px);
  }
`;

export const GooeyContainer = styled.div`
  margin: 0;
  padding: 0;
  line-height: 0px;
  overflow: hidden;
  filter: contrast(10);
  height: 60px;
  display: inline-flex;
  width: ${props => props.width || '500px'};
  justify-content: flex-start;
  padding-top: 20px;
  position: relative;
  background: black;
  transition: width 0.2s ease-out;
  font-family: 'TT Interphases Pro Bold';
  ${media.tablet}{
    height:40px
  }
`;

export const StyledHeading = styled.h1`
  position: absolute;
  color: white;
  font-size: 51px;
  white-space: nowrap;
  text-shadow: 4px 4px 120px rgba(0, 0, 0, 0.8),
              -4px -4px 120px rgba(0, 0, 0, 0.6),
              -4px 4px 120px rgba(0, 0, 0, 0.4),
              4px -4px 120px rgba(0, 0, 0, 0.8);
              ${media.tablet}{
                font-size:30px;
              }
`;

export const TextExit = styled(StyledHeading)`
  animation: ${fadeOut} 1.5s 0.5s forwards;
`;

export const TextEnter = styled(StyledHeading)`
  animation: ${fadeIn} 1.5s forwards;
`;

export const BoxSize = styled.span`
  font-size: 51px;
  background: red;
  font-family: 'TT Interphases Pro Bold';
`;