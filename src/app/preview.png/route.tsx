// app/api/og/route.tsx
import { fontSans } from "@/config/fonts";
import { gradientColors } from "@/config/site";
import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

const LogoOutline = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 959.976 959.976"
      color="transparent"
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

export async function GET(req: NextRequest) {
  const fontUrl = new URL("/ReadexProVariable.ttf", req.url);

  const font = await fetch(fontUrl).then((res) => res.arrayBuffer());
  console.log(font);
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          fontFamily: "Readex Pro Variable",
          display: "flex",
          background: "linear-gradient(135deg, #000000 0%, #0a0a0a 100%)",
          position: "relative",
          overflow: "hidden",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Starfield Background */}
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: "100%",
            height: "100%",
            background: `
            radial-gradient(circle at 20% 30%, rgba(74, 85, 104, 0.15) 0%, transparent 30%),
            radial-gradient(circle at 80% 70%, rgba(74, 85, 104, 0.15) 0%, transparent 30%)
          `,
          }}
        >
          {/* Dynamic stars */}
          {Array.from({ length: 150 }).map((_, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 3}px`,
                height: `${Math.random() * 3}px`,
                background: `rgba(255, 255, 255, ${Math.random() * 0.5})`,
                borderRadius: "50%",
              }}
            />
          ))}
        </div>

        {/* Galactic Core Effect */}
        <div
          style={{
            position: "absolute",
            width: "1200px",
            height: "1200px",
            background:
              "radial-gradient(circle, rgba(26, 32, 44, 0.2) 0%, transparent 60%)",
            transform: "rotate(45deg)",
          }}
        />

        {/* Main Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
            zIndex: "1",
            textShadow: "0 4px 12px rgba(0,0,0,0.3)",
          }}
        >
          <LogoOutline
            style={{
              width: 220,
              height: 220,
              margin: "0 auto",
              filter: "drop-shadow(0 8px 24px rgba(74, 85, 104, 0.3))",
            }}
          />

          <h1
            style={{
              fontSize: 72,
              fontWeight: 900,
              marginTop: 40,
              textAlign: "center",
              fontFamily: "Inter",
              letterSpacing: "-2px",
              background: "linear-gradient(45deg, #e2e8f0 30%, #94a3b8 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Stellar Web Solutions
          </h1>

          <p
            style={{
              fontSize: 32,
              color: "#718096",
              marginTop: 24,
              textAlign: "center",
              fontWeight: 500,
              fontFamily: "Inter",
              letterSpacing: "0.5px",
            }}
          >
            Orbiting the future of digital innovation
          </p>
        </div>

        {/* Celestial Accents */}
        <div
          style={{
            position: "absolute",
            top: "20%",
            left: "15%",
            width: 80,
            height: 80,
            background:
              "radial-gradient(circle, rgba(74, 85, 104, 0.4) 0%, transparent 70%)",
            borderRadius: "50%",
            filter: "blur(12px)",
          }}
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Readex Pro Variable",
          data: font,
          style: "normal",
        },
      ],
    },
  );
}
