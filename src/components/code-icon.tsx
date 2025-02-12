import { type ManifestConfig, generateManifest } from "material-icon-theme";

type IconImport = { src: string };
export const CodeIcon: React.FC<{ filename: string | null }> = async ({
   filename,
}) => {
   if (!filename) return null;
   const config: ManifestConfig = {};
   const manifest = generateManifest(config);
   if (!manifest) return null;
   let icons: [IconImport, IconImport | null] | null = null;

   if (filename && manifest.fileNames && manifest.fileNames[filename]) {
      const image = manifest.fileNames[filename];
      const imageLight = manifest.light?.fileNames?.[filename];

      icons = await Promise.all([
         (await import(`material-icon-theme/icons/${image}.svg`).then(
            (mod) => mod.default,
         )) as Promise<IconImport>,
         (imageLight
            ? await import(`material-icon-theme/icons/${imageLight}.svg`).then(
                 (mod) => mod.default,
              )
            : async () => null) as Promise<IconImport | null>,
      ]);
   } else {
      return null;
   }

   if (!icons) return null;
   let [darkIcon, lightIcon] = icons;
   return (
      <picture>
         {lightIcon && (
            <img
               src={lightIcon.src}
               className="w-6 h-6 dark:hidden"
               alt={filename ?? "unknown" + " file icon light"}
            />
         )}
         <img
            src={darkIcon.src}
            alt={filename ?? "unknown" + " file icon"}
            className="w-6 h-6 hidden dark:block"
         />
      </picture>
   );
};
