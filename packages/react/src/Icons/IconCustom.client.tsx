import { ComponentPropsWithoutRef, Suspense, useMemo } from "react";
import { icons } from "./IconCustomLoader";

export type IconName = keyof typeof icons;

type IconProps = {
  name: IconName;
  size?: number;
  fill?: string;
} & ComponentPropsWithoutRef<"svg">;

const IconCustom = ({
  name,
  size = 24,
  fill = "inherited",
  ...others
}: IconProps) => {
  const SvgIcon = useMemo(() => icons[name], [name]);

  if (!SvgIcon) return null;
  return (
    <Suspense fallback={null}>
      <SvgIcon width={size} height={size} fill={fill} {...others} />
    </Suspense>
  );
};

export { IconCustom };
