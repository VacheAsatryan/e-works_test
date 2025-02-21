// components/MorphingTextWithBlobs.js
import { useState, useEffect, useRef } from "react";
import {
  GooeyContainer,
  TextExit,
  TextEnter,
  BoxSize,
} from "./morphText.styles";

const MorphingTextWithBlobs = () => {
  const words = [
    "Knowledge Bases",
    "Help Centers",
    "Client Portails",
    "Directories",
    "Listing Sites",
    "Media Sharing Sites",
    "Blogs and Publications",
    "Social Networks",
    "Support Communities",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);
  const [width, setWidth] = useState(0);
  const [prevWidth, setPrevWidth] = useState(0);
  const textRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevIndex(currentIndex);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  useEffect(() => {
    const observer = new ResizeObserver(([entry]) => {
      const newWidth = entry.contentRect.width + 10;

      if (newWidth > prevWidth) {
        setWidth(`${newWidth}px`);
        setPrevWidth(newWidth);
      } else {
        setTimeout(() => {
          setWidth(`${newWidth}px`);
          setPrevWidth(newWidth);
        }, 3000);
      }
    });

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => observer.disconnect();
  }, [currentIndex, prevWidth]);

  return (
    <GooeyContainer width={width}>
      {prevIndex !== null && (
        <TextExit key={`prev-${prevIndex}`}>{words[prevIndex]}</TextExit>
      )}
      <TextEnter key={`curr-${currentIndex}`} ref={textRef}>
        {words[currentIndex]}
      </TextEnter>
    </GooeyContainer>
  );
};

export default MorphingTextWithBlobs;
