import { ComponentPropsWithoutRef, Suspense, useMemo } from "react";
import { icons as iconsFilled } from "./converted/svg/filled";
import { icons as iconsOutlined } from "./converted/svg/outlined";
import { icons as iconsRound } from "./converted/svg/round";
import { icons as iconsSharp } from "./converted/svg/sharp";
import { icons as iconsTwoTone } from "./converted/svg/two-tone";

export type IconName = keyof typeof iconsFilled;

type IconProps = {
  name: IconName;
  styleType?: "filled" | "outlined" | "round" | "sharp" | "two-tone";
  size?: number;
  fill?: string;
} & ComponentPropsWithoutRef<"svg">;

const Icon = ({
  name,
  size = 24,
  fill = "currentColor",
  styleType = "filled",
  ...others
}: IconProps) => {
  const SvgIconFilled = useMemo(() => iconsFilled[name], [name]);
  const SvgIconOutlined = useMemo(() => iconsOutlined[name], [name]);
  const SvgIconRound = useMemo(() => iconsRound[name], [name]);
  const SvgIconSharp = useMemo(() => iconsSharp[name], [name]);
  const SvgIconTwoTone = useMemo(() => iconsTwoTone[name], [name]);

  if (!SvgIconFilled || !SvgIconOutlined) return null;
  return (
    <Suspense fallback={null}>
      {styleType === "filled" && (
        <SvgIconFilled width={size} height={size} fill={fill} {...others} />
      )}
      {styleType === "outlined" && (
        <SvgIconOutlined width={size} height={size} fill={fill} {...others} />
      )}
      {styleType === "round" && (
        <SvgIconRound width={size} height={size} fill={fill} {...others} />
      )}
      {styleType === "sharp" && (
        <SvgIconSharp width={size} height={size} fill={fill} {...others} />
      )}
      {styleType === "two-tone" && (
        <SvgIconTwoTone width={size} height={size} fill={fill} {...others} />
      )}
    </Suspense>
  );
};

export { Icon };
