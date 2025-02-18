import React, { useEffect, useRef } from "react";
import CardComponent from "../cardComponent/CardComponent";
import sansplexImage from "../../assets/images/sansplexImage.png";
import edumarkImage from "../../assets/images/edumarkImage.png";
import earthugardiansImage from "../../assets/images/earthugardiansImage.png";
import enjoImage from "../../assets/images/enjoImage.png";
import collideImage from "../../assets/images/collideImage.png";
import eventquestImage from "../../assets/images/eventquestImage.png";
import jobFinderImage from "../../assets/images/jobFinderImage.png";
import { Slide, SliderContainer, SliderTrack } from "./slider.styles";

function AutoPlay() {
  const sliderArray = [
    sansplexImage,
    edumarkImage,
    earthugardiansImage,
    enjoImage,
    collideImage,
    eventquestImage,
    jobFinderImage,
  ];

  // Дублируем массив несколько раз для эффекта бесконечной прокрутки
  const infiniteSlides = [
    ...sliderArray,
    ...sliderArray,
    ...sliderArray,
    ...sliderArray,
  ];

  const trackRef = useRef(null);

  useEffect(() => {
    const handleAnimationEnd = () => {
      // Когда анимация заканчивается, мы просто сбрасываем позицию без перерыва в анимации
      if (trackRef.current) {
        trackRef.current.style.animation = "none";
        trackRef.current.offsetHeight; // Trigger reflow
        trackRef.current.style.animation = null; // Возвращаем стили из styled-components
      }
    };

    const track = trackRef.current;
    if (track) {
      track.addEventListener("animationiteration", handleAnimationEnd);
    }

    return () => {
      if (track) {
        track.removeEventListener("animationiteration", handleAnimationEnd);
      }
    };
  }, []);

  return (
    <SliderContainer>
      <SliderTrack ref={trackRef}>
        {infiniteSlides.map((el, index) => (
          <Slide key={index}>
            <CardComponent imageSrc={el} />
          </Slide>
        ))}
      </SliderTrack>
    </SliderContainer>
  );
}

export default AutoPlay;
