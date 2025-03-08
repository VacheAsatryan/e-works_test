import styled, { keyframes } from "styled-components";
import { media } from "../../assets/style/theme";

const rotateTop = keyframes`

  0% { width: 100px; box-shadow: 0px -5px 10px 1px rgba(40, 255, 69, 1);}
  20% { left: 50%; top: 2px; width: 8px; }
  40% { width: 8px; box-shadow: none; top: 2px; left: 92%; }
  47% { width: 8px; box-shadow: none; top: 16px; left: 98%; }
  50% { width: 8px; box-shadow: none; top: 55%; left: 98%; }
  53% { width: 8px; box-shadow: none; top: 16px; left: 98%; }
  60% { width: 8px; box-shadow: none; top: 2px; left: 92%; }
  80% { left: 50%; top: 2px; width: 8px; }
  100% { width: 100px;   box-shadow: 0px -5px 10px 1px rgba(40, 255, 69, 1);  }

`;

const rotateBottom = keyframes`
  0% { width: 100px; box-shadow: 0px 5px 10px 1px rgba(40, 255, 69, 1); bottom: -5px; }
  20% { left: 50%; bottom: -5px; width: 8px; }
  40% { width: 8px; box-shadow: none; bottom: -5px; left: 8%; }
  47% { width: 8px; box-shadow: none; bottom: 14px; left: 1%; }
  50% { width: 8px; box-shadow: none; bottom: 25px; left: 1%; }
  53% { width: 8px; box-shadow: none; bottom: 14px; left: 1%; }
  60% { width: 8px; box-shadow: none; bottom: -5px; left: 8%; }
  80% { width: 8px; box-shadow: none; bottom: -5px; left: 50%; }
  100% { width: 100px; box-shadow: 0px 5px 10px 1px rgba(40, 255, 69, 1); bottom: -5px; }
`;

 export const ButtonWrapper = styled.div`
  position: relative;
  display: inline-block;

`;

export const AnimatedButton = styled.button`

  border-image-slice: 1;
  background-color: #40ff00;
  color: black;
  padding: 16px 18px;
  border: 2px solid #28a745;
  border-radius: 56px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  font-size: 15px;
  font-family: "TT Interphases Pro";
  z-index: 300;
  box-shadow: 0px 4.72px 43.44px rgba(70, 203, 25, 0.8);
  display: flex;
  align-items: center;
  gap: 10px;
     ${media.tablet} {
        font-size:10px
    }
      
`;

export const BorderTopDot = styled.div`
  position: absolute;
  width: 100px;
  height: 8px;
  background-color: #28a745;
  border-radius: 50%;
  left: 50%;
  top: -1px;
  transform: translate(-50%, -50%);
  animation: ${rotateTop} 2s linear infinite;
  box-shadow: 0px -5px 15px 1px rgba(40, 255, 69, 1);
  opacity: 0.5;
`;

export const BorderBottomDot = styled.div`
  position: absolute;
  width: 10px;
  height: 8px;
  background: rgba(70, 203, 25, 1);
  border-radius: 50%;
  left: 50%;
  bottom: -9px;
  transform: translate(-50%, -50%);
  box-shadow: 0px 5px 10px 1px rgba(40, 255, 69, 1);
  opacity: 0.5;
  animation: ${rotateBottom} 2s linear infinite;
`;

export const FreeText = styled.span`
  font-family: "TT Interphases Pro Bold";
`;