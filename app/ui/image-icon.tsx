import { ICON_SIZE } from "@/lib/definitions";
import Image from "next/image";

type Props = {
  iconUrl: string;
  alt?: string;
  iconHeight?: number;
  iconWidth?: number;
  isActive?: boolean;
}
export const ImageIcon: React.FC<Props> = ({ iconUrl, alt = "Some icon", iconHeight = ICON_SIZE, iconWidth = ICON_SIZE, isActive }) =>
  <Image
    src={iconUrl}
    alt={alt}
    height={iconHeight}
    width={iconWidth}
    priority
    className={isActive ? "opacity-100" : "opacity-60"}
  />

// TODO: Figure out how to colourise image when active