import styled from "styled-components";

export const CardContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const Card = styled.div`
  width: 183px;
  height: 226px;
  border-radius: 12px;
  transform: rotate(90deg);
`;

export const CardReflection = styled.div`
  position: absolute;
  bottom: -20px;
  right: -130px;
  width: 100%;
  height: 40px;
  opacity: 0.12;
  filter: blur(6px);
  transform: rotate(90deg);
`;

export const CardImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 12px;
  object-fit: cover;
`;