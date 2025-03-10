import { ComponentPropsWithoutRef, PropsWithChildren } from "react";

type ChildrenProps = PropsWithChildren<{
  className?: string;
  onClick?: () => void;
}>;

type PreviousLinkProps = {
  handleClick: () => void;
} & ComponentPropsWithoutRef<"div">;

export type { ChildrenProps, PreviousLinkProps };
