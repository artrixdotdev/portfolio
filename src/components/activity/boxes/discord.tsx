import { BentoBox, BentoSizes } from "@/components/bento";
import { SiDiscord } from "@icons-pack/react-simple-icons";
import { type BoxType } from ".";

const label = "discord";
const size: BentoSizes = "compact";

const Bento = () => {
  return (
    <BentoBox id={label} size={size}>
      <SiDiscord className="w-full h-full mauto" />
    </BentoBox>
  );
};

export const DiscordBento = [Bento, { label, size }] as BoxType;
