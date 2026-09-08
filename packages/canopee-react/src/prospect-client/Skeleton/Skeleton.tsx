import type { ComponentPropsWithoutRef, CSSProperties } from "react";
import "@axa-fr/canopee-css/client/Skeleton/SkeletonAll.css";
import { getClassName } from "../utilities/getClassName";

const CLASS_NAME = "af-skeleton";

export const skeletonVariants = {
  action: "action",
  circle: "circle",
  rectangle: "rectangle",
} as const;

export type SkeletonVariant = keyof typeof skeletonVariants;

export const skeletonSizeVariants = {
  XS: "extra-small",
  S: "small",
  M: "medium",
  L: "large",
  XL: "extra-large",
  XXL: "extra-extra-large",
} as const;

export type SkeletonSizeVariant = keyof typeof skeletonSizeVariants;

export type SkeletonCircleSizeVariant = keyof Pick<
  typeof skeletonSizeVariants,
  "S" | "M" | "L"
>;

export type SkeletonActionSizeVariant = keyof Pick<
  typeof skeletonSizeVariants,
  "M"
>;

type SkeletonSharedProps = {
  colSize?: number;
  rowSize?: number;
} & ComponentPropsWithoutRef<"div">;

type SkeletonCircleProps = {
  size?: SkeletonCircleSizeVariant;
  variant: "circle";
};

type SkeletonActionProps = {
  size?: SkeletonActionSizeVariant;
  variant: "action";
};

type SkeletonRectangleProps = {
  size?: SkeletonSizeVariant;
  variant?: "rectangle";
};

/**
 * Props for the `Skeleton` component.
 *
 * The allowed `size` values depend on the selected `variant`:
 * - `circle`: `S | M | L`
 * - `action`: `M`
 * - `rectangle`: `XS | S | M | L | XL | XXL`
 */
export type SkeletonProps = SkeletonSharedProps &
  (SkeletonCircleProps | SkeletonActionProps | SkeletonRectangleProps);

/**
 * Renders one skeleton placeholder block.
 *
 * This is the base building block used by `SkeletonGrid`, `SkeletonList`,
 * and `ExitLayoutSkeleton`.
 *
 * @component
 * @param {SkeletonProps} props - Skeleton props.
 * @param {number} [props.colSize=1] - Number of grid columns occupied by the skeleton.
 * @param {number} [props.rowSize=1] - Number of grid rows occupied by the skeleton.
 * @param {SkeletonVariant} [props.variant="rectangle"] - Visual variant of the placeholder.
 * @param {SkeletonSizeVariant | SkeletonCircleSizeVariant | SkeletonActionSizeVariant} [props.size="M"] - Size applied to the skeleton. The accepted values depend on `variant`.
 * @param {string} [props.className] - Additional CSS class applied to the skeleton.
 * @returns {JSX.Element} The rendered Skeleton component.
 */
export const Skeleton = ({
  className,
  colSize = 1,
  rowSize = 1,
  size = "M",
  variant = "rectangle",
  style,
  ...props
}: SkeletonProps) => (
  <div
    {...props}
    className={getClassName({
      baseClassName: CLASS_NAME,
      modifiers: [variant, skeletonSizeVariants[size]],
      className,
    })}
    style={
      {
        "--col-size": colSize,
        "--row-size": rowSize,
        ...style,
      } as CSSProperties
    }
  />
);
