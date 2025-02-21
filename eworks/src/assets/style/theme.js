// src/styles/media.js
const sizes = {
    mobile: "480px",

    tablet: "963px",
    middle:"963px",
    desktop: "1024px",
  };
  
  const media = {
    mobile: `@media (max-width: ${sizes.mobile})`,
    tablet: `@media (max-width: ${sizes.tablet})`,
    desktop: `@media (max-width: ${sizes.desktop})`,
    middle:`@media (max-width: ${sizes.middle})`
  };
  
  export { media, sizes };
  