import {
  Globe,
  Smartphone,
  ShoppingCart,
  Palette,
  Clapperboard,
  Package,
  type LucideIcon,
} from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  Globe,
  Smartphone,
  ShoppingCart,
  Palette,
  Clapperboard,
  Package,
};

export function ServiceIcon({
  name,
  size = 24,
  className,
}: {
  name: string;
  size?: number;
  className?: string;
}) {
  const Icon = ICONS[name] ?? Globe;
  return <Icon size={size} className={className} aria-hidden="true" />;
}
