"use client";
import * as React from "react";
export * from "lucide-react";
import { IconSvgProps } from "@/types";
import { gradientColors, SOCIAL_HANDLES } from "@/config/site";
import { UserIcon } from "lucide-react";

export const Logo: React.FC<IconSvgProps> = (props) => (
   <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 959.976 959.976"
      width="24"
      height="24"
      {...props}
   >
      <path
         fill="currentColor"
         d="m 808.84282,621.69566 -151.30783,-338.68312 -6.86117,0.93248 a 183.19775,180.75346 0 0 0 -137.51185,95.67093 v 0.0404 l -2.5939,5.10851 c -1.26422,2.49068 -2.51004,5.17712 -3.82745,8.26121 v 0.35928 l -4.57615,10.22306 -8.91912,19.9597 102.53501,229.42249 90.24056,201.99683 a 178.34338,175.96386 0 0 0 163.19112,104.98775 h 110.76063 z"
      />
      <path
         fill="currentColor"
         d="m 647.35773,260.25049 a 207.99572,205.22364 0 0 0 -158.14617,113.09574 4.5001681,4.4401918 0 0 0 -0.28432,0.60547 c 0,0.0343 -0.0367,0.0708 -0.0367,0.10492 -2.35441,4.64204 -4.42245,9.3991 -6.38616,14.25706 v 0.0343 l -2.49548,5.56243 -206.03005,461.06347 A 178.32938,175.9527 0 0 1 110.80471,959.944 H 0.00239276 L 366.45516,139.76386 408.28627,46.126277 c 27.47354,-61.498675 115.91001,-61.50473 143.39173,0 l 41.84951,93.647693 z"
      />{" "}
   </svg>
);

export const LogoText: React.FC<IconSvgProps> = (props) => (
   <svg
      viewBox="0 0 597.7 128.91902"
      version="1.1"
      width="597.70001"
      height="128.91902"
      fill="currentColor"
      color="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
   >
      <defs id="defs5">
         <style id="style1">
            {".cls-2{fill:url(#linear-gradient);} .cls-1{fill:currentColor;}"}
         </style>
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
         fill="currentColor"
         color="currentColor"
         className="cls-1"
         points="195.588,520.149 208.993,483.14 213.962,469.604 222.855,445.085 231.813,469.604 236.717,483.14 250.186,520.149 264.571,520.149 226.516,415.53 219.193,415.53 181.138,520.149 "
         id="polygon5"
         transform="translate(-181.138,-415.526)"
      />
      <polygon
         fill="currentColor"
         className="cls-1"
         points="440.005,520.149 453.606,520.149 453.606,429.064 477.994,429.064 477.994,415.53 415.615,415.53 415.615,429.064 440.005,429.064 "
         id="polygon6"
         transform="translate(-181.138,-415.526)"
      />
      <rect
         fill="currentColor"
         className="cls-1"
         x="454.76398"
         y="0.0039987792"
         width="13.536"
         height="104.619"
         id="rect6"
      />
      <polygon
         fill="currentColor"
         className="cls-1"
         points="757.784,415.53 738.037,449.597 718.421,415.53 702.859,415.53 730.256,463.066 697.366,520.149 712.928,520.149 738.037,476.537 763.276,520.149 778.838,520.149 745.817,463.066 773.346,415.53 "
         id="polygon7"
         transform="translate(-181.138,-415.526)"
      />
      <path
         fill="currentColor"
         className="cls-1"
         d="m 180.991,60.749 a 35.679,35.679 0 0 0 0,-50.349 A 36.135,36.135 0 0 0 159.675,0 h -29.686 v 13.6 h 25.893 a 21.97,21.97 0 0 1 0,43.94 h -25.893 v 47.078 h 13.535 V 71.145 h 12.358 l 20.924,33.478 h 16.412 L 170.006,68.857 q 3.79,-0.916 10.985,-8.108 z"
         id="path7"
      />
      <path
         fill="currentColor"
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
         style={{
            animation: "hueRotate 1s linear infinite",
            fill: "url(#linear-gradient)",
         }}
      />
   </svg>
);

export const LogoOutline = (props: React.SVGProps<SVGSVGElement>) => {
   return (
      <svg
         viewBox="0 0 959.976 959.976"
         color="transparent"
         width="24"
         height="24"
         {...props}
      >
         <SVGGradientDef />
         <path
            style={{
               animation: "hueRotate 1s linear infinite",
            }}
            fill="url(#linear-gradient)"
            width={10}
            d="M 945.30748,926.70163 805.63344,609.83638 669.08094,300.04021 v 0 L 656.40446,271.26703 606.64925,158.39795 567.96963,70.673875 A 94.951789,94.951789 0 0 0 480.01098,13.328173 v 23.715723 a 71.43836,71.43836 0 0 1 66.2602,43.202171 l 38.67774,87.724063 49.20495,111.61755 A 193.58093,193.58093 0 0 0 489.64945,381.65751 l -2.69411,5.15765 v 0.24564 c -1.36522,2.74147 -2.69596,5.65858 -4.07063,8.92175 l -1.86402,4.41647 v 0.12816 l -2.20632,4.99711 -8.25063,18.717 -4.21795,9.56816 0.7202,1.63349 -177.46136,402.50953 A 164.81905,164.81905 0 0 1 138.78927,936.28282 H 36.373356 L 375.06928,167.9682 413.7322,80.253561 a 71.447811,71.447811 0 0 1 66.26749,-43.209727 v 0 -23.715716 0 A 94.955583,94.955583 0 0 0 392.03374,70.68727 L 353.37084,158.4111 14.671134,926.70159 0,959.97609 h 138.78174 a 188.61988,188.61988 0 0 0 172.51757,-112.4775 l 168.71167,-382.66974 85.30036,193.45245 83.3984,189.2076 a 188.61419,188.61419 0 0 0 172.52322,112.49098 h 138.73622 z m -124.067,9.5663 A 164.82093,164.82093 0 0 1 670.4195,837.92262 l -83.40026,-189.20973 -94.04252,-213.26966 8.74592,-19.83605 2.29145,-5.17083 2.03235,-4.58856 v -0.37815 c 1.17049,-2.7622 2.26881,-5.17835 3.40323,-7.42051 l 2.50313,-5.00844 v 0 l 0.0151,-0.0321 v 0 a 167.9877,167.9877 0 0 1 125.96706,-88.66941 l 6.71545,-0.92244 139.28266,315.98212 139.67216,316.86525 z"
         />
         <path
            fill="currentColor"
            d="m 783.9331,619.39889 -139.84018,-317.24311 -6.33947,0.87344 A 169.30736,169.30736 0 0 0 510.66542,392.6437 v 0.0377 l -2.39919,4.78516 c -1.16861,2.33293 -2.3181,4.84926 -3.53548,7.73621 v 0.33853 l -4.23114,9.57572 -8.24307,18.69624 94.7627,214.89936 83.40026,189.20973 a 164.82093,164.82093 0 0 0 150.82098,98.34153 h 102.36478 z"
         />
         <path
            fill="currentColor"
            d="m 634.69846,280.83359 a 192.24238,192.24238 0 0 0 -146.17025,105.94172 4.4051073,4.4051073 0 0 0 -0.26283,0.56718 c 0,0.0321 -0.0321,0.0659 -0.0321,0.0981 -2.17807,4.34833 -4.08951,8.80464 -5.90261,13.35332 v 0.0338 l -2.30841,5.21069 -190.42519,431.8989 A 164.82093,164.82093 0 0 1 138.78172,936.26761 H 36.37333 L 375.06926,167.96812 413.73218,80.253481 c 25.39446,-57.610439 107.13106,-57.61421 132.53116,0 l 38.678,87.724069 z"
         />
      </svg>
   );
};

export const SVGGradientDef = () => (
   <defs>
      <linearGradient id="linear-gradient" x1="0%" y1="50%" x2="100%" y2="50%">
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
);

export const SVGGradientDefDiagonal = () => (
   <defs>
      <linearGradient id="linear-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
         {gradientColors.map((color, index) => (
            <stop
               key={index}
               offset={`${(index * 100) / (gradientColors.length - 1)}%`}
               stopColor={color}
               stopOpacity="1"
               style={{
                  transform: "rotate(45deg)",
               }}
            />
         ))}
      </linearGradient>
   </defs>
);

// Component for GitHub follower count
const GithubFollowerCount: React.FC = () => {
   const [user, setUser] = React.useState<{ followers?: number } | null>(null);

   React.useEffect(() => {
      const fetchGithubUser = async () => {
         try {
            const response = await fetch(
               "https://api.github.com/users/" + SOCIAL_HANDLES.github,
            );
            const userData = await response.json();
            setUser(userData);
         } catch (error) {
            console.error("Failed to fetch GitHub user data", error);
         }
      };

      fetchGithubUser();
   }, []);

   if (!user?.followers) return null;

   return (
      <a
         href={`https://github.com/${SOCIAL_HANDLES.github}?tab=followers`}
         target="_blank"
         rel="noopener noreferrer"
         className="inline-flex hover:bg-content2 transition-colors rounded-lg items-center p-2 gap-0.5"
      >
         <UserIcon className="w-4 h-4" />
         <span>{user.followers}</span>
      </a>
   );
};
