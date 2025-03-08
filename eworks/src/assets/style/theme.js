const sizes = {
    mobile: "480px",
    tablet: "996px",
    middle: "963px",
    desktop: "1024px",
    largeDesktop: "1920px", 
  };
  
  const media = {
    mobile: `@media (max-width: ${sizes.mobile})`,
    tablet: `@media (max-width: ${sizes.tablet})`,
    desktop: `@media (max-width: ${sizes.desktop})`,
    middle: `@media (max-width: ${sizes.middle})`,
    largeDesktop: `@media (min-width: ${sizes.largeDesktop})`, 
  };
  
  export { media, sizes };
  