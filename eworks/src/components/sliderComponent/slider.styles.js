import styled, { keyframes } from "styled-components";

// Анимация для бесконечной прокрутки
const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-250px * 7)); 
  }
`;

// Styled-components для контейнера слайдера
export const SliderContainer = styled.div`
  width: 120%;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
  background: transparent;
   transform: scale(0.8); 
`;

export const SliderTrack = styled.div`
  display: flex;
  animation: ${scroll} 15s linear infinite;
  
  &:hover {
    animation-play-state: running; /* Гарантирует, что анимация продолжается при наведении */
  }
`;

export const Slide = styled.div`
  flex-shrink: 0;
  width: 250px; /* Фиксированная ширина для слайдов */
  height:180px;
  margin: 0 2px; /* Отступ между слайдами */
  transition: transform 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  
`;