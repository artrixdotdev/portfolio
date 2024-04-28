import React from "react";

export const Ring = () => {
  const gradientColors = [
    "#FF4050",
    "#FF851B",
    "#FFD700",
    "#BFFF00",
    "#32CD32",
    "#00FA9A",
    "#40E0D0",
    "#00BFFF",
    "#1E90FF",
    "#9370DB",
    "#FF69B4",
    "#FF1493",
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50">
      <svg
        className="h-1 w-full animate-hue-rotate" // Ensure the SVG fills the width and has a fixed height
        viewBox="0 0 100 1" // Adjust viewBox to maintain line aspect
        preserveAspectRatio="none"
      >
        <rect
          x="0"
          y="0"
          width="100"
          height="1"
          fill="none"
          stroke="url(#vibrantGradient)"
          strokeWidth="6"
          vectorEffect="non-scaling-stroke"
        />
        <defs>
          <linearGradient
            id="vibrantGradient"
            x1="0%"
            y1="50%"
            x2="100%"
            y2="50%"
          >
            {gradientColors.map((color, index) => (
              <stop
                key={index}
                offset={`${(index * 100) / (gradientColors.length - 1)}%`}
                stopColor={color}
                stopOpacity="1"
              />
            ))}
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};
