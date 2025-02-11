"use client";
import {
   type ManifestConfig,
   type IconAssociations,
   type IconPackValue,
   generateManifest,
} from "material-icon-theme";
import { useMemo, useState } from "react";
import Image from "next/image";
export const CodeIcon: React.FC<{ filename: string | null }> = ({
   filename,
}) => {
   const config: ManifestConfig = {};
   const manifest = useMemo(() => generateManifest(config), []);
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
         alt={filename || "file icon"}
         className="w-6 h-6"
      />
   );
};
