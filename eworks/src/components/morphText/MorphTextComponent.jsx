import { useEffect, useRef } from "react";
import "./morphText.css";

const MorphingTextComponent = () => {
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);

  useEffect(() => {
    const elts = {
      text1: text1Ref.current,
      text2: text2Ref.current,
    };

    const texts = [
      "nowlage satisfaing",
      "is",
      "this",
      "so",
      "satisfying",
      "to",
      "watch?",
    ];

    const morphTime = 1;
    const cooldownTime = 2;

    let textIndex = texts.length - 1;
    let time = new Date();
    let morph = 0;
    let cooldown = cooldownTime;

    elts.text1.textContent = texts[textIndex % texts.length];
    elts.text2.textContent = texts[(textIndex + 1) % texts.length];

    const doMorph = () => {
      morph -= cooldown;
      cooldown = 0;

      let fraction = morph / morphTime;

      if (fraction > 1) {
        cooldown = cooldownTime;
        fraction = 1;
      }

      setMorph(fraction);
    };

    const setMorph = (fraction) => {
      elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
      elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

      fraction = 1 - fraction;
      elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
      elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

      elts.text1.textContent = texts[textIndex % texts.length];
      elts.text2.textContent = texts[(textIndex + 1) % texts.length];
    };

    const doCooldown = () => {
      morph = 0;

      elts.text2.style.filter = "";
      elts.text2.style.opacity = "100%";

      elts.text1.style.filter = "";
      elts.text1.style.opacity = "0%";
    };

    const animate = () => {
      requestAnimationFrame(animate);

      let newTime = new Date();
      let shouldIncrementIndex = cooldown > 0;
      let dt = (newTime - time) / 1000;
      time = newTime;

      cooldown -= dt;

      if (cooldown <= 0) {
        if (shouldIncrementIndex) {
          textIndex++;
        }

        doMorph();
      } else {
        doCooldown();
      }
    };

    animate();

    // Очистка эффекта, если компонент будет удален
    return () => {
      morph = 0;
      cooldown = cooldownTime;
    };
  }, []); // Пустой массив зависимостей: запускается только один раз при монтировании компонента

  return (
    <div>
      <div id="container" style={{ filter: "none", background: "red" }}>
        <span id="text1" ref={text1Ref}></span>
        <span id="text2" ref={text2Ref}></span>
      </div>
    </div>
  );
};

export default MorphingTextComponent;
