"use client";
import { type ManifestConfig, generateManifest } from "material-icon-theme";
import { useMemo, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

export const CodeIcon: React.FC<{ filename: string | null }> = ({
   filename,
}) => {
   if (!filename) return null;
   const config: ManifestConfig = {};
   const { theme } = useTheme();
   const manifest = useMemo(
      () =>
         theme === "light"
            ? generateManifest(config).light
            : generateManifest(config),
      [theme],
   );
   if (!manifest) return null;
   const [icon, setIcon] = useState<{ src: string } | undefined>();
   if (filename && manifest.fileNames && manifest.fileNames[filename]) {
      const image = manifest.fileNames[filename];
      import(`material-icon-theme/icons/${image}.svg`).then((mod) => {
         setIcon(mod.default);
      });
   }
   if (!icon) return null;
   return (
      <Image
         src={icon.src}
         width="32"
         height="32"
         alt={filename ?? "unknown" + " file icon"}
         className="w-6 h-6"
      />
   );
};
