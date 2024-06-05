"use client";

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { gradientColors } from "@/metadata";

export default (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="200"
    height="100"
    viewBox="0 0 200 100"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...props}
  >
    <motion.path
      initial={{ pathLength: 0, fill: "transparent" }}
      animate={{ pathLength: 1, fill: "currentColor" }}
      transition={{ duration: 2 }}
      d="M10 75 L30 25 L50 75 M55 75 L75 25 L95 75 M100 25 L100 75 M105 75 L125 25 L145 75 M150 25 L150 75 M155 75 L165 55 L175 75 L185 25 L195 75"
    />
  </svg>
);

export const LogoText = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 597.7 128.91902"
    version="1.1"
    width="597.70001"
    height="128.91902"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <defs id="defs5">
      <style id="style1">{".cls-2{fill:url(#linear-gradient);}"}</style>
      <linearGradient
        id="linear-gradient"
        x1="181.138"
        y1="538.46198"
        x2="778.83801"
        y2="538.46198"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(-181.138,-415.526)"
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
    <polygon
      className="cls-1"
      points="195.588,520.149 208.993,483.14 213.962,469.604 222.855,445.085 231.813,469.604 236.717,483.14 250.186,520.149 264.571,520.149 226.516,415.53 219.193,415.53 181.138,520.149 "
      id="polygon5"
      transform="translate(-181.138,-415.526)"
    />
    <polygon
      className="cls-1"
      points="440.005,520.149 453.606,520.149 453.606,429.064 477.994,429.064 477.994,415.53 415.615,415.53 415.615,429.064 440.005,429.064 "
      id="polygon6"
      transform="translate(-181.138,-415.526)"
    />
    <rect
      className="cls-1"
      x="454.76398"
      y="0.0039987792"
      width="13.536"
      height="104.619"
      id="rect6"
    />
    <polygon
      className="cls-1"
      points="757.784,415.53 738.037,449.597 718.421,415.53 702.859,415.53 730.256,463.066 697.366,520.149 712.928,520.149 738.037,476.537 763.276,520.149 778.838,520.149 745.817,463.066 773.346,415.53 "
      id="polygon7"
      transform="translate(-181.138,-415.526)"
    />
    <path
      className="cls-1"
      d="m 180.991,60.749 a 35.679,35.679 0 0 0 0,-50.349 A 36.135,36.135 0 0 0 159.675,0 h -29.686 v 13.6 h 25.893 a 21.97,21.97 0 0 1 0,43.94 h -25.893 v 47.078 h 13.535 V 71.145 h 12.358 l 20.924,33.478 h 16.412 L 170.006,68.857 q 3.79,-0.916 10.985,-8.108 z"
      id="path7"
    />
    <path
      className="cls-1"
      d="m 394.413,60.749 a 35.674,35.674 0 0 0 0,-50.349 A 36.132,36.132 0 0 0 373.097,0 h -29.685 v 13.6 h 25.893 a 21.97,21.97 0 0 1 0,43.94 h -25.893 v 47.078 h 13.535 V 71.145 h 12.358 l 20.923,33.478 h 16.413 L 383.428,68.857 q 3.79,-0.916 10.985,-8.108 z"
      id="path8"
    />
    <rect
      className="rounded"
      rx="10"
      x="4.8828122e-07"
      y="120"
      width="597.70001"
      height="11.967"
      id="rect8"
      style={{  animation: "hueRotate 1s linear infinite", fill: "url(#linear-gradient)" }}
    />
  </svg>
);

export const LogoOutline = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 959.976 959.976"
      {...props}
    >
      <defs>
        <linearGradient
          id="linear-gradient"
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
      <path
        style={{
          animation: "hueRotate 1s linear infinite",
        }}
        fill="url(#linear-gradient)"
        width={10}
        d="M726.11,712.742l-73.878-167.6L580.005,381.281h0L573.3,366.062l-26.317-59.7-20.459-46.4A50.223,50.223,0,0,0,480,229.63v12.544a37.786,37.786,0,0,1,35.047,22.851l20.458,46.4,26.026,59.038a102.391,102.391,0,0,0-76.433,53.988l-1.425,2.728v.13c-.722,1.45-1.426,2.993-2.153,4.719l-.986,2.336v.068l-1.167,2.643-4.364,9.9-2.231,5.061.381.864-93.865,212.9a87.178,87.178,0,0,1-79.771,52.01H245.346L424.493,311.424l20.45-46.395a37.791,37.791,0,0,1,35.051-22.855h0V229.63h0a50.225,50.225,0,0,0-46.528,30.339l-20.45,46.4L233.867,712.742l-7.76,17.6h73.406a99.767,99.767,0,0,0,91.25-59.493L480,468.443l45.118,102.323,44.112,100.078a99.764,99.764,0,0,0,91.253,59.5h73.382Zm-65.623,5.06a87.179,87.179,0,0,1-79.774-52.018L536.6,565.705,486.858,452.9l4.626-10.492,1.212-2.735,1.075-2.427v-.2c.619-1.461,1.2-2.739,1.8-3.925l1.324-2.649v0l.008-.017h0a88.854,88.854,0,0,1,66.628-46.9l3.552-.488L640.754,550.2l73.877,167.6Z"
      />
      <path
        fill="currentColor"
        d="M640.754,550.2,566.788,382.4l-3.353.462a89.552,89.552,0,0,0-67.221,47.4v.02l-1.269,2.531c-.618,1.234-1.226,2.565-1.87,4.092v.179l-2.238,5.065-4.36,9.889L536.6,565.705l44.113,100.079A87.179,87.179,0,0,0,660.487,717.8h54.144Z"
      />
      <path
        fill="currentColor"
        d="M561.819,371.122a101.683,101.683,0,0,0-77.314,56.036,2.33,2.33,0,0,0-.139.3c0,.017-.017.035-.017.052-1.152,2.3-2.163,4.657-3.122,7.063v.018l-1.221,2.756L379.284,665.792a87.179,87.179,0,0,1-79.771,52.01H245.346L424.493,311.424l20.45-46.395c13.432-30.472,56.665-30.474,70.1,0l20.458,46.4Z"
      />
    </svg>
  );
};

export const Logo = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 959.976 959.976"
      {...props}
    >
      <path
        fill="currentColor"
        d="M640.754,550.2,566.788,382.4l-3.353.462a89.552,89.552,0,0,0-67.221,47.4v.02l-1.269,2.531c-.618,1.234-1.226,2.565-1.87,4.092v.179l-2.238,5.065-4.36,9.889L536.6,565.705l44.113,100.079A87.179,87.179,0,0,0,660.487,717.8h54.144Z"
      />
      <path
        fill="currentColor"
        d="M561.819,371.122a101.683,101.683,0,0,0-77.314,56.036,2.33,2.33,0,0,0-.139.3c0,.017-.017.035-.017.052-1.152,2.3-2.163,4.657-3.122,7.063v.018l-1.221,2.756L379.284,665.792a87.179,87.179,0,0,1-79.771,52.01H245.346L424.493,311.424l20.45-46.395c13.432-30.472,56.665-30.474,70.1,0l20.458,46.4Z"
      />
    </svg>
  );
};
