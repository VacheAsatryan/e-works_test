export const ButtonTopShadowIcon = () => {
  return (
    <svg
      width="291"
      height="94"
      viewBox="0 0 291 94"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_df_6_12143)">
        <rect
          x="18.5"
          y="18.5"
          width="225"
          height="57"
          rx="28.5"
          stroke="url(#paint0_linear_6_12143)"
          strokeWidth="3"
          shapeRendering="crispEdges"
        />
      </g>
      <defs>
        <filter
          id="filter0_df_6_12143"
          x="-29"
          y="-24"
          width="320"
          height="152"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="5" />
          <feGaussianBlur stdDeviation="23" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.27451 0 0 0 0 0.796078 0 0 0 0 0.0980392 0 0 0 0.8 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_6_12143"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_6_12143"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="2.5"
            result="effect2_foregroundBlur_6_12143"
          />
        </filter>
        <linearGradient
          id="paint0_linear_6_12143"
          x1="20"
          y1="47"
          x2="242"
          y2="47"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#66DB3F" stopOpacity="0" />
          <stop offset="0.25" stopColor="#66DB3F" stopOpacity="0.15" />
          <stop offset="0.5" stopColor="#40FF00" />
          <stop offset="0.75" stopColor="#66DB3F" stopOpacity="0.15" />
          <stop offset="1" stopColor="#66DB3F" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};
