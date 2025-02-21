import styled, { keyframes, css } from "styled-components";

// Функция для создания анимации с учетом направления
const scroll = (direction) => keyframes`
  from {
    transform: translateX(${direction === "left" ? "0" : "-50%"});
  }
  to {
    transform: translateX(${direction === "left" ? "-50%" : "0"});
  }
`;

// Styled-components для контейнера слайдера
export const SliderContainer = styled.div`
  width: 120%;
  margin: 0 auto;
  overflow: visible;
  position: relative;
  background: transparent;
  transform: scale(0.8);
`;

export const SliderTrack = styled.div`
  display: flex;
  width: max-content;
  ${({ direction }) => css`
    animation: ${scroll(direction)} 20s linear infinite;
  `}
`;

export const Slide = styled.div`
  flex-shrink: 0;
  width: 250px;
  height: 180px;
  margin: 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
